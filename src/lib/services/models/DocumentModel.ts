/**
 * Base class for document models.
 */
class BaseDocumentModel {
    /**
     * The unique identifier for the document.
     */
    $id!: string;

    /**
     * The collection to which the document belongs.
     */
    $collection!: string;

    /**
     * The database to which the document belongs.
     */
    $databaseId!: string;

    /**
     * The creation date and time of the document.
     */
    $createdAt!: string;

    /**
     * The last update date and time of the document.
     */
    $updatedAt!: string;

    /**
     * Create a new BaseDocumentModel instance.
     * @param data - Partial data for initializing the document model.
     */
    constructor(data: Partial<BaseDocumentModel>) {
        Object.assign(this, data);
    }
}

/**
 * Class for document models with additional properties.
 * @template T - The type for additional properties.
 */
class DocumentModel<T> extends BaseDocumentModel {

    /**
     * Create a new DocumentModel instance.
     * @param data - Data for initializing the document model, including additional properties.
     */
    constructor(data: T & Partial<BaseDocumentModel>) {
        super(data);
        Object.assign(this, data);
        //this.atrribures = data;
    }
}

/**
 * Create a new document model.
 * @template T - The type for additional properties.
 * @param data - Data for initializing the document model, including additional properties.
 * @returns A new DocumentModel instance.
 */
function createDocumentModel<T extends Partial<BaseDocumentModel>>(data: T) {
    return new DocumentModel<T>(data);
}

export { DocumentModel, createDocumentModel };
