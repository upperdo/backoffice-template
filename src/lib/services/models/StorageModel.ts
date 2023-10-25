/**
 * Class for storage service
 */
class StorageModel {
    /**
     * The unique identifier for the document.
     */
    $id!: string

    /**
     * Storage bucketId that the file is stored.
     */
    bucketId!: string

    /**
     * The creation date and time of the file.
     */
    $createdAt!: string

    /**
     * The update date and time of the file.
     */
    $updatedAt!: string

    /**
     * File permissions list.
     */
    $permissions!: any[]

    /**
     * Name of the file.
     */
    name!: string

    /**
     * Signature of the file.
     */
    signature!: string

    /**
     * The mime type of the file.
     */
    mimeType!: string

    /**
     * The original size of the file in bytes.
     */
    sizeOriginal!: number

    /**
     * Amount of total chunk file.
     */
    chunksTotal!: number

    /**
     * Amount of uploaded chunk file.
     */
    chunksUploaded!: number

    /**
     * Create a new StorageModel instance
     * @param data 
     */
    constructor(data: Partial<StorageModel>){
       Object.assign(this, data);
    }

    /**
    * Convert the StorageModel to a plain object without the StorageModel wrapper.
    * @returns {object} - The plain object with storage properties.
    */
    static toPlainObject(storageModel: StorageModel): Omit<StorageModel, 'toPlainObject'> {
        const { createStorageModel, ...rest } = storageModel;
        // @ts-ignore
        return rest;
    }

     createStorageModel(data: any){
        const storageModel = new StorageModel(data);
        return StorageModel.toPlainObject(storageModel);
    }
    
}


export { StorageModel }