export class AppwriteServiceError extends Error {
    constructor(message: string){
        super(message);
        this.message = 'AppwriteServiceError';
    }
}

export class AppwriteServiceGetAccountError extends AppwriteServiceError {
    constructor(){
        super('Error retriving account information');
        this.message = 'AppwriteServiceGetAccountError';
    }
}

export class AppwriteServiceDeleteSessionError extends AppwriteServiceError {
    constructor(){
        super('Error deleting session');
        this.message ='AppwriteServiceDeleteSessionError';
    }
}

export class AppwriteServiceCreateEmailSessionError extends AppwriteServiceError {
    constructor(){
        super('Error creating an email session');
        this.message = 'AppwriteServiceCreateEmailSessionError';
    }
}

export class AppwriteServiceListIdentitiesError extends AppwriteServiceError {
    constructor(){
        super('Error listing identities');
        this.message = 'AppwriteServiceListIdentitiesError';
    }
}

export class AppwriteServiceUpdateNameError extends AppwriteServiceError {
    constructor(){
        super('Error updating name');
        this.message ='AppwriteServiceUpdateName';
    }
}

export class AppwriteServiceUpdateEmailError extends AppwriteServiceError {
    constructor(){
        super('Error updating email address');
        this.message = 'AppwriteServiceUpdateEmail';
    }
}

export class AppwriteServiceUpdatePhoneError extends AppwriteServiceError {
    constructor(){
        super('Error update phone number');
        this.message ='AppwriteServiceUpdatePhone';
    }
}

export class AppwriteServiceUpdatePasswordError extends AppwriteServiceError {
    constructor(){
        super('Error updating password');
        this.message = 'AppwriteServiceUpdatePassword';
    }
}

export class AppwriteServiceListDocumentsError extends AppwriteServiceError {
    constructor(){
        super('Error listing documents');
        this.message = 'AppwriteServiceListDocuments';
    }
}

export class AppwriteServiceGetDocumentBySlugError extends AppwriteServiceError {
    constructor(){
        super('Error getting document by slug');
        this.message = 'AppwriteServiceGetDocumentBySlug';
    }
}

export class AppwriteServiceCreateDocumentError extends AppwriteServiceError {
    constructor(){
        super('Error creating document');
        this.message = 'AppwriteServiceCreateDocument';
    }
}

export class AppwriteServiceGetDocumentError extends AppwriteServiceError {
    constructor(){
        super('Error getting document by id');
        this.message = 'AppwriteServiceGetDocument';
    }
}

export class AppwriteServiceUpdateDocumentError extends AppwriteServiceError {
    constructor(){
        super('Error updating document');
        this.message = 'AppwriteServiceUpdateDocument';
    }
}

export class AppwriteServiceDeleteDocumentError extends AppwriteServiceError {
    constructor(){
        super('Error deleting document');
        this.message = 'AppwriteServiceDeleteDocument';
    }
}

export class AppwriteCreateExedcutionError extends AppwriteServiceError {
    constructor(){
        super('Error creating execution');
        this.message = 'AppwriteCreateExedcutionError';
    }
}

export class AppwriteServiceUnAuthorizedError extends AppwriteServiceError {
    constructor(message: string){
        super(message);
        this.message = 'AppwriteServiceUnAuthorized';
    }
}