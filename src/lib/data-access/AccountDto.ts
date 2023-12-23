import type { BackendServiceInterface } from "$lib/infraestructure/BackendServiceInterface";
import type { CommonProperties } from "$lib/app/types/interfaces/CommonPropertiesInterface";
import type { CredentialsInterface } from "$lib/app/types/interfaces/CredentialsInterface";
import { 
    LogoutError, 
    CreateEmailSessionError, 
    GetAccountError, 
    ListDevicesError, 
    UpdateAccountEmailerror, 
    UpdateAccountNameError, 
    UpdateAccountPasswordError, 
    UpdateAccountPhoneError, CreateAccountError } from "./errors/AccountError";


export interface AccountDto<T> extends CommonProperties {
    name: string;
    email?: string;
    phone: string;
    labels: string[];
    preferences: T;
}

export interface Identity extends CommonProperties{

}

export interface IdentityList {
    total: number;
    identities: Identity[]
}

export interface Credentials {
    email: string;
    password: string;
}

export interface NewAccount {
    userId: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface Session {
    $id: string;
    $createdAt: string;
    userId: string;
    expire: Date;
    provider: string;
    providerUid: string;
    providerAccessToken: string;
    providerAccessTokenExpiry: Date;
    providerRefreshToken: string;
    ip: string;
    osCode: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
    current: boolean;
}

function toDtoMapper(account: AccountDto<any>) {
    return {
        $id: account.$id,
        name: account.name,
        email: account.email || '',
        phone: account.phone,
        labels: account.labels || [],
        preferences: account.preferences,
        $createdAt: account.$createdAt,
        $updatedAt: account.$updatedAt
    };
}

export async function GetAccount<T>(service: BackendServiceInterface): Promise<AccountDto<T>> {
    try {
        const account = await service.getAccount<T>();
        return account as unknown as AccountDto<T>;
    } catch (error) {
        throw new GetAccountError();
    }
}

export async function Logout(sessionId: string, service: BackendServiceInterface): Promise<void> {
    try {
        await service.deleteSession(sessionId);
    } catch (error) {
        throw new LogoutError();
    }
}

export async function ListDevices(service: BackendServiceInterface): Promise<IdentityList> {
    try {
        const identities = await service.listIdentities<IdentityList>();
        return identities;
    } catch (error) {
        throw new ListDevicesError();
    }
}

export async function CreateEmailSession(credentials: CredentialsInterface, service: BackendServiceInterface): Promise<Session> {
    try {
        const session = await service.createEmailSession<Session>(credentials);
        return session;
    } catch (error) {
        throw new CreateEmailSessionError();
    }
}

export async function CreateAccount<T>(newAccount: NewAccount, service: BackendServiceInterface): Promise<T> {
    try {
        const account = await service.createAccount<T>(newAccount);
        return account as unknown as T;
    } catch (err) {
        throw new CreateAccountError();
    }
}

export async function UpdateAccountPassword(password: string, oldPassword: string, service: BackendServiceInterface): Promise<AccountDto<any>> {
    try {
        const updatedAccount = await service.updatePassword<AccountDto<any>>(password, oldPassword);
        return updatedAccount;
    } catch (error) {
        throw new UpdateAccountPasswordError();
    }
}

export async function UpdateAccountPhone(phone: string, password: string, service: BackendServiceInterface): Promise<AccountDto<any>> {
    try {
        const updatedAccount = await service.updatePhone<AccountDto<any>>(phone, password);
        return updatedAccount;
    } catch (error) {
        throw new UpdateAccountPhoneError();
    }
}

export async function UpdateAccountEmail(email: string, password: string, service: BackendServiceInterface): Promise<AccountDto<any>> {
    try {
        const updatedAccount = await service.updateEmail<AccountDto<any>>(email, password);
        return updatedAccount;
    } catch (error) {
        throw new UpdateAccountEmailerror();
    }
}

export async function UpdateAccountName(name: string, service: BackendServiceInterface): Promise<AccountDto<any>> {
    try {
        const updatedAccount = await service.updateName<AccountDto<any>>(name);
        return updatedAccount;
    } catch (error) {
        throw new UpdateAccountNameError();
    }
}
