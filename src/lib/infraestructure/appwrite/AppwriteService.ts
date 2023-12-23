import { 
    AppwriteServiceUpdateDocumentError,
    AppwriteServiceCreateDocumentError,
    AppwriteServiceDeleteDocumentError,
    AppwriteServiceDeleteSessionError,
    AppwriteServiceError,
    AppwriteServiceGetAccountError,
    AppwriteServiceGetDocumentError,
    AppwriteServiceGetDocumentBySlugError,
    AppwriteServiceListDocumentsError,
    AppwriteServiceListIdentitiesError,
    AppwriteServiceUpdateEmailError,
    AppwriteServiceUpdateNameError,
    AppwriteServiceUpdatePasswordError,
    AppwriteServiceUpdatePhoneError,
    AppwriteServiceCreateEmailSessionError,
    AppwriteServiceUnAuthorizedError,
    AppwriteCreateExedcutionError
 } from "./AppwriteServiceErrors";
 import type { BackendServiceContext, BackendServiceInterface } from "$lib/infraestructure/BackendServiceInterface";
import type { CredentialsInterface, NewAccount } from "$lib/app/types/interfaces/CredentialsInterface";
import { Client, Databases, Account, ID, Query, AppwriteException, Functions } from "appwrite";
import { config } from "$lib/app/config";

class AppwriteService implements BackendServiceInterface {
    private client: Client;
    private databases: Databases;
    private account: Account;
    private functions: Functions

    constructor(headers: Record<string, string> = {}){
        this.client = new Client()
        .setEndpoint(config.appwrite.endpoint)
        .setProject(config.appwrite.projectId);

        this.client.headers = headers;
        this.databases = new Databases(this.client);
        this.account = new Account(this.client);
        this.functions = new Functions(this.client);
    }

    private handleAppwriteExecption(err: AppwriteException): void {
        console.error('Appwrite exepction', err);
        if(err.code === 401){
            throw new AppwriteServiceUnAuthorizedError(err.message);
        }else {
            throw new AppwriteServiceError(err.message)
        }
    }

    async getAccount<T>(): Promise<T> {
        try {
            const account = await this.account.get();
            return account as unknown as T;
        } catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceGetAccountError();
        }
    }

   async deleteSession<T>(sessionId: string): Promise<T> {
        try {
            const response = await this.account.deleteSession(sessionId);
            return response as unknown as T;
        } catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceDeleteSessionError();
        }
    }

    async createEmailSession<T>(credentials: CredentialsInterface): Promise<T> {
        try {
            const response = await this.account.createEmailSession(credentials.email, credentials.password);
            return response as unknown as T;
        } catch(err) {
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceCreateEmailSessionError()
        }
    }

    async createAccount<T>(newAccount: NewAccount): Promise<T> {
        try {
            const response = await this.account.create(newAccount.userId, newAccount.email, newAccount.password, newAccount.name || '');
            return response as unknown as T;
        } catch(err) {
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceCreateEmailSessionError()
        }
    }

    async listIdentities<T>(): Promise<T> {
            try{ 
                const response = await this.account.listIdentities();
                return response as unknown as T;
            } catch (err){
                this.handleAppwriteExecption(err as unknown as AppwriteException);
                throw new AppwriteServiceListIdentitiesError()
            }
    }

    async updateName<T>(name: string): Promise<T> {
        try {
            const response = await this.account.updateName(name);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceUpdateNameError()
        }
    }
    async updateEmail<T>(email: string, password: string): Promise<T> {
        try {
            const response = await this.account.updateEmail(email, password);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceUpdateEmailError()
        }
    }
    async updatePhone<T>(phone: string, password: string): Promise<T> {
        try {
            const response = await this.account.updatePhone(phone, password);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceUpdatePhoneError()
        }
    }
    async updatePassword<T>(password: string, oldPassword: string): Promise<T> {
        try {
            const response = await this.account.updatePassword(password, oldPassword);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceUpdatePasswordError()
        }
    }
    async listDocuments<T>(context: BackendServiceContext, queries:any[] = []): Promise<T> {
        try {
            const response = await this.databases.listDocuments(context.databaseId, context.collectionId, queries);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceListDocumentsError()
        }
    }
    async getDocument<T>(context: BackendServiceContext, documentId: string, queries: any[] = []): Promise<T> {
        try {
            const response = await this.databases.getDocument(context.databaseId, context.collectionId, documentId, queries);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceGetDocumentError()
        }
    }
    async getDocumentBySlug<T>(context: BackendServiceContext, slug: string): Promise<T> {
        try {
            const query = [Query.equal('slug', slug), Query.limit(1)];
            const response = (await this.databases.listDocuments(context.databaseId, context.collectionId, query)).documents;
            return response[0] as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceGetDocumentBySlugError()
        }
    }
    async createDocument<T>(context: BackendServiceContext, data: any, permissions: string[] = []): Promise<T> {
        try {
            const response = await this.databases.createDocument(context.databaseId, context.collectionId, ID.unique(), data, permissions)
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceCreateDocumentError()
        }
    }

    async updateDocument<T>(context: BackendServiceContext, documentId: string, data: any, permissions: any[] = []): Promise<T> {
        try {
            const response = await this.databases.updateDocument(context.databaseId, context.collectionId, documentId, data, permissions);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceUpdateDocumentError()
        }
    }

    async deleteDocument<T>(context: BackendServiceContext, documentId: string): Promise<T> {
        try {
            const response =await this.databases.deleteDocument(context.databaseId, context.collectionId, documentId);
            return response as unknown as T;
        }catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteServiceDeleteDocumentError()
        }
    }

    async runFunction<T>(functionId: string, body: string): Promise<T>{
        try {
            const response = await this.functions.createExecution(functionId, body);
            return response as unknown as T;
        } catch (err){
            this.handleAppwriteExecption(err as unknown as AppwriteException);
            throw new AppwriteCreateExedcutionError()
        }
    }
    
     /**
     * Constructor for AppwriteService.
     * @param {Object} params - Custom headers to be set for Appwrite requests.
     * @param {string} params.hash
     * @param {string} params.projectId
     * @returns {void}
     * @throws {Error} Throws an error if headers can't be sent
     * @example
     * const headers = {
     *  hash: 'your-session-token',
     *  projectId: 'your-appwrite-project-id'
     * }
    */
     setHeaders(params: { hash: string,  projectId: string }): void{
        const headers = {
            'X-Fallback-Cookies': params.hash,
            'X-Appwrite-Project': params.projectId,
            'x-sdk-name': 'Node.js',
            'x-sdk-platform': 'server',
            'x-sdk-language': 'nodejs',
            'x-sdk-version': '13.0.1',
            'X-Appwrite-Response-Format': '1.4.0'
        }
    
        this.client.headers = headers;
    }
    
}

const appwriteService = new AppwriteService();
export default appwriteService;