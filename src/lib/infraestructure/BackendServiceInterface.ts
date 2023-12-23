import type { CredentialsInterface, NewAccount } from "$lib/app/types/interfaces/CredentialsInterface";

export interface BackendServiceContext {
    databaseId: string;
    collectionId: string;
}

export interface BackendServiceInterface {
    getAccount<T>(): Promise<T>,
    deleteSession(sessionId: string): Promise<void>,
    createEmailSession<T>(credentials: CredentialsInterface): Promise<T>,
    createAccount<T>(newAccount: NewAccount): Promise<T>,
    listIdentities<T>(): Promise<T>,
    updateName<T>(name: string): Promise<T>,
    updateEmail<T>(email: string, password: string): Promise<T>,
    updatePhone<T>(phone: string, password: string): Promise<T>,
    updatePassword<T>(password: string, oldPassword: string): Promise<T>,
    listDocuments<T>(context: BackendServiceContext, queries?: string[]): Promise<T>,
    getDocumentBySlug<T>(context: BackendServiceContext, slug: string): Promise<T>,
    createDocument<T>(context: BackendServiceContext, data: any, permissions?: string[]): Promise<T>,
    getDocument<T>(context: BackendServiceContext, documentId: string, queries?: string[]): Promise<T>,
    updateDocument<T>(context: BackendServiceContext, documentId: string, data: any, permissions?: string[]): Promise<T>,
    deleteDocument(context: BackendServiceContext, documentId: string):Promise<void>,
    runFunction<T>(functionId: string, body: string): Promise<T>,
}