import { LoggerUtility } from "$lib/common/logger/logger_utility";
import BackendPlatform from "$lib/platforms";
import type { DocumentListData, DocumentData, GlobalDocumentProperties } from "$lib/common/constants/types";

/**
 * @name listDocuments
 * @param databseId 
 * @param collectionId 
 * @param queries 
 * @param logger 
 * @description Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
 * @returns DocumentList<T>
 */
async function listDocuments<T>(databseId: string, collectionId:string, queries?: any[], logger: typeof LoggerUtility = LoggerUtility): Promise<DocumentListData<T>>{
    const filePath = "lib/services/databases/ listDocuments"
    try {
        const result = await BackendPlatform.databases.listDocuments(databseId, collectionId, queries);
        // @ts-ignore
        const documents: T[] = result.documents;
        return {
            total: result.total,
            documents
        }
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }

        return {
            total: 0,
            documents: []
        }
    }
}

/**
 * @name createDocument
 * @param databseId 
 * @param collectionId 
 * @param data 
 * @param permissions 
 * @param logger 
 * @description Create a new Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.
 * @returns DocumentData<T>
 */
async function createDocument<T extends GlobalDocumentProperties>(databseId: string, collectionId:string, data = {}, permissions?: string[],logger: typeof LoggerUtility = LoggerUtility): Promise<DocumentData<T> | null>{
    const filePath = "lib/services/databases/ createDocument"
    try {
        const result = await BackendPlatform.databases.createDocument(databseId, collectionId, BackendPlatform.ID.unique(), data, permissions);
        // @ts-ignore
        const document: T = result;
        return document;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null;
    }
}
/**
 * @name getDocument
 * @param databseId 
 * @param collectionId 
 * @param documentId 
 * @param queries 
 * @param logger 
 * @description Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
 * @returns DocumentData<T>
 */
async function getDocument<T extends GlobalDocumentProperties>(databseId: string, collectionId:string, documentId: string, queries?: string[], logger: typeof LoggerUtility = LoggerUtility): Promise<DocumentData<T> | null>{
    const filePath = "lib/services/databases/ getDocument"
    try {
        const result = await BackendPlatform.databases.getDocument(databseId, collectionId, documentId, queries);
       // @ts-ignore
        const document: T = result;
        return document;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
    }
    return null;
}

/**
 * @name updateDocument
 * @param databseId 
 * @param collectionId 
 * @param documentId 
 * @param data 
 * @param permissions 
 * @param logger 
 * @description Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
 * @returns DocumentData<T>
 */
async function updateDocument<T extends GlobalDocumentProperties>(databseId: string, collectionId:string, documentId: string, data = {}, permissions?: string[], logger: typeof LoggerUtility = LoggerUtility): Promise<DocumentData<T>| null> {
    const filePath = "lib/services/databases/ updateDocument"
    try {
        const result = await BackendPlatform.databases.updateDocument(databseId, collectionId, documentId, data, permissions);
         // @ts-ignore
        const document: T = result;
        return document;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
    }
    return null;
}

export {
    listDocuments,
    createDocument,
    getDocument,
    updateDocument
}