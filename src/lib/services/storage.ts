import BackendPlatform from "$lib/platforms";
import { StorageModel } from "./models/StorageModel";
import { LoggerUtility } from "$lib/common/logger/logger_utility";

/**
 * Data structure for a list of files.
 * @template T - The type of files in the list.
 */
type FileListData<T> = {
    total: number;
    files: T[]
}

/**
 * List files from a storage bucket.
 *
 * @param {string} bucketId - The ID of the storage bucket.
 * @param {any[]} queries - Optional queries for filtering files.
 * @param {string} search - Optional search query for file names.
 * @param {typeof LoggerUtility} logger - The logger utility to use for logging.
 * @returns {Promise<FileListData<StorageModel>>} A list of files in the specified storage bucket.
 */
async function listFiles(bucketId: string, queries?: any[], search?: string, logger: typeof LoggerUtility = LoggerUtility): Promise<FileListData<StorageModel>> {
    const filePath = "lib/services/storage/ listFiles";
    try{
        const result = await BackendPlatform.storage.listFiles(bucketId, queries, search);

        const files: FileListData<StorageModel> = {
            total: result.total,
            files: result.files.map((file) => new StorageModel(file).createStorageModel(file) as StorageModel)
        }

        return files;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        }else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }

        return {
            total: 0,
            files: []
        } as FileListData<StorageModel>
    }
}

/**
 * Create a new file in a storage bucket.
 *
 * @param {string} bucketId - The ID of the storage bucket.
 * @param {File} fileId - The file to be uploaded.
 * @param {string[]} permissions - Optional permissions for the file.
 * @param {typeof LoggerUtility} logger - The logger utility to use for logging.
 * @returns {Promise<StorageModel | null>} The created file object, or null if an error occurs.
 */
async function createFile(bucketId: string, fileId: File, permissions?: string[], logger: typeof LoggerUtility = LoggerUtility): Promise<StorageModel| null>{
    const filePath = "lib/services/storage/ createFile";
    try {
        const result = await BackendPlatform.storage.createFile(bucketId, BackendPlatform.ID.unique(), fileId, permissions);
        const file: StorageModel = new StorageModel(result).createStorageModel(result);

        return file;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        }else{
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null;
    }
}

/**
 * Get a file from a storage bucket by its ID.
 *
 * @param {string} bucketId - The ID of the storage bucket.
 * @param {string} fileId - The ID of the file to retrieve.
 * @param {typeof LoggerUtility} logger - The logger utility to use for logging.
 * @returns {Promise<StorageModel | null>} The retrieved file object, or null if an error occurs.
 */
async function getFile(bucketId: string, fileId: string, logger: typeof LoggerUtility = LoggerUtility): Promise<StorageModel | null>{
    const filePath = "lib/services/storage/ createFile";
    try {
        const result = await BackendPlatform.storage.getFile(bucketId, fileId);
        const file: StorageModel = new StorageModel(result).createStorageModel(result);

        return file;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        }else{
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null;
    }
}

export {
    listFiles,
    createFile,
    getFile
}