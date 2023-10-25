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
            files: result.files.map((file) => new StorageModel(file))
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

export {
    listFiles
}