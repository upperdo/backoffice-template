import BackendPlatform from "$lib/platforms";
import { StorageModel } from "./models/StorageModel";
import { LoggerUtility } from "$lib/common/logger/logger_utility";

type FileListData<T> = {
    total: number;
    files: T[]
}

// TODO: Finish implementation
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