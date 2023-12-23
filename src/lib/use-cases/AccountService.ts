import type { GetAccount, CreateEmailSession, ListDevices, CreateAccount, UpdateAccountEmail, UpdateAccountName, UpdateAccountPassword, UpdateAccountPhone, IdentityList, Credentials, Session, Logout, AccountDto, NewAccount } from "$lib/data-access/AccountDto";
import type { AccountEntity } from "$lib/entities/account";
import type { BackendServiceInterface } from "$lib/infraestructure/BackendServiceInterface";
import type * as cookieNode from "cookie";
import type { Cookies } from "@sveltejs/kit";
import { AccountError, CreateEmailSessionSSRError, CreateSessionSSRError, EmailSessionError, LogoutError, ValidateSessionError } from "./errors/AccountErrors";
import type { AppwriteUtils, createAppwriteSession, splitCookie } from "$lib/app/utils";
import { CreateAccountError } from "$lib/data-access/errors/AccountError";

// Mapper
function accountToCreateAccountDtoMapper(account: AccountEntity<any>): AccountDto<any> {
    return {
        $id: account.accountId,
        name: account.accountName,
        email: account.accountEmail,
        labels: account.accountLabels,
        phone: account.accountPhone,
        preferences: account.accountPreferences,
        $createdAt: account.accountCreatedAt,
        $updatedAt: account.accountUpdatedAt
    };
}

function toCreateAccountDto(account: Partial<NewAccount>, utils: typeof AppwriteUtils): NewAccount {
    return {
        userId: utils.ID.unique(),
        name: account.name?.trim()!,
        password: account.password?.trim()!,
        email: account.email?.trim()!,
        phone: `+1${account.phone}`.trim()
    }
}

export class AccountService {
    private accountDataAccess: {
        getAccount: typeof GetAccount;
        createEmailSession: typeof CreateEmailSession;
        listDevices: typeof ListDevices;
        updateAccountPassword: typeof UpdateAccountPassword;
        updateAccountPhone: typeof UpdateAccountPhone;
        updateAccountEmail: typeof UpdateAccountEmail;
        updateAccountName: typeof UpdateAccountName;
        createAccount: typeof CreateAccount;
        logout: typeof Logout;
    };

    private backendUtils: {
        cookieName: typeof createAppwriteSession,
        split: typeof splitCookie,
        parse: typeof cookieNode.parse,
        appwriteUtils: typeof AppwriteUtils
    }

    private backendContext: {
        projectId: string,
        endpoint: string,
        ssrDomain: string
    }

    private backendService: BackendServiceInterface;

    constructor(
        accountDataAccess: {
            getAccount: typeof GetAccount;
            createEmailSession: typeof CreateEmailSession;
            listDevices: typeof ListDevices;
            updateAccountPassword: typeof UpdateAccountPassword;
            updateAccountPhone: typeof UpdateAccountPhone;
            updateAccountEmail: typeof UpdateAccountEmail;
            updateAccountName: typeof UpdateAccountName;
            createAccount: typeof CreateAccount;
            logout: typeof Logout;
        },
        backendUtils: {
            cookieName: typeof createAppwriteSession,
            split: typeof splitCookie,
            parse: typeof cookieNode.parse,
            appwriteUtils: typeof AppwriteUtils
        },
        backendContext: {
            projectId: string,
            endpoint: string,
            ssrDomain: string
        },
        backendService: BackendServiceInterface,
    ) {
        this.accountDataAccess = accountDataAccess;
        this.backendService = backendService;
        this.backendUtils = backendUtils;
        this.backendContext = backendContext;
    }

    async getAccount(): Promise<AccountDto<any>> {
        try {
            const account = await this.accountDataAccess.getAccount<AccountDto<any>>(this.backendService)
            return account;
        } catch (error) {
            console.error(error);
            throw new AccountError();
        }
    }

    async createEmailSession(credentials: Credentials): Promise<Session | undefined> {
        try {
            const session = await this.accountDataAccess.createEmailSession(credentials, this.backendService);
            return session;
        } catch (err) {
            const error = err as Error;
            throw new EmailSessionError();
        }
    }

    async createAccount(newAccount: Partial<NewAccount>): Promise<AccountDto<any>> {
        try {
            const newAccountData = toCreateAccountDto(newAccount, this.backendUtils.appwriteUtils);
            const account = await this.accountDataAccess.createAccount<AccountDto<any>>(newAccountData, this.backendService);
            return account;
        } catch (err) {
            const error = err as Error;
            console.error(error);
            return { invalid: error.message }
        }
    }

    async createEmailSessionSsr(data: { credentials: Credentials, cookies: Cookies }): Promise<boolean> {
        try {
            const body: string = JSON.stringify({ ...data.credentials });
            const headers = { 'x-appwrite-project': this.backendContext.projectId, 'Content-Type': 'application/json' };
            const response = await fetch(this.backendContext.endpoint, { method: 'POST', headers, body })
            const json = await response.json();


            const valid = await this.validateSessionResponse(json);

            if (!valid) {
                throw new ValidateSessionError()
            }

            const session = this.createSessionSsr({
                response: response,
                data: { domain: this.backendContext.ssrDomain, cookies: data.cookies },
                context: { cookieName: this.backendUtils.cookieName, parse: this.backendUtils.parse, split: this.backendUtils.split }
            })

            if (!session) {
                throw new CreateSessionSSRError()
            }

            return true;

        } catch (err) {
            throw new CreateEmailSessionSSRError()
        }
    }

    async validateSessionResponse(json: any) {
        if (json.code >= 400) {
            return false
        } else {
            return true
        }
    }

    async createSessionSsr(
        params: {
            data: { domain: string, cookies: Cookies },
            response: Response,
            context: { cookieName: typeof createAppwriteSession, split: typeof splitCookie, parse: typeof cookieNode.parse }
        }): Promise<boolean> {
        const { data, context, response } = params;
        //
        const [firstCookie, secondCookie] = context.split(response.headers.get('set-cookie') || '');
        //
        if (firstCookie && secondCookie) {
            const firstCookieObject = context.parse(firstCookie);
            const secondCookieObject = context.parse(secondCookie);
            //
            data.cookies.set(`${context.cookieName()}`, `${secondCookieObject[`y, ${context.cookieName()}`]}`, {
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'none',
                expires: new Date(secondCookieObject['expires']),
                domain: data.domain
            });
            //
            data.cookies.set(`${context.cookieName(true)}`, `${firstCookieObject[`${context.cookieName(true)}`]}`, {
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'none',
                expires: new Date(firstCookieObject['expires']),
                domain: data.domain
            });

            return true;
        } else {
            return false
        }
    }

    async listDevices(): Promise<IdentityList> {
        try {
            const deviceList = await this.accountDataAccess.listDevices(this.backendService);
            return deviceList;
        } catch (error) {
            throw new AccountError();
        }
    }

    async logout(): Promise<void> {
        try {
            await this.accountDataAccess.logout('current', this.backendService);
        } catch (error) {
            throw new LogoutError();
        }
    }
}
