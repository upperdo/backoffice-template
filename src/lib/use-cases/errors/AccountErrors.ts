export class AccountErrorBase extends Error {
    constructor(message: string){
        super(message);
        this.message = 'AccountErrorBase';
    }
}
export class AccountError extends AccountErrorBase {
    constructor(){
        super('An error occurred retrieving your account');
        this.message = 'AccountError';
    }
}

export class LogoutError extends AccountErrorBase {
    constructor(){
        super("An error occurred deleting your account");
        this.message = 'LogoutError';
    }
}

export class UpdateAccountError extends AccountErrorBase {
    constructor(){
        super("An error ocurred updating your account");
        this.message = 'UpdateAccountError';
    }
}

export class CreateAccountError extends AccountErrorBase {
    constructor(){
        super("An Error ocurred creating a new account");
        this.message = 'Ya existe un usuario con estas credenciales, favor utilizar otro email.';
    }
}

export class DeleteAccountError extends AccountErrorBase {
    constructor(){
        super("An error ocurred deleting an account");
        this.message = 'DeleteAccountError';
    }
}

export class EmailSessionError extends AccountErrorBase {
    constructor(){
        super("An error occurred creating an email session");
        this.message = 'EmailSessionError';
    }
}

export class AuthenticationError extends AccountErrorBase {
    constructor(){
        super("You must be authenticated to perform this action");
        this.message = 'AuthenticationError';
    }
}

export class ValidateSessionError extends AccountErrorBase {
    constructor(){
        super("An error occurred validating your session");
        this.message = 'ValidateSessionError';
    }
}

export class CreateSessionSSRError extends AccountErrorBase {
    constructor(){
        super("An error occurred creating a valid SSR Cookie");
        this.message = 'CreateSessionSSRError';
    }
}

export class CreateEmailSessionSSRError extends AccountErrorBase {
    constructor(){
        super("An error occurred creating a valid SSR Session");
        this.message = 'CreateEmailSessionSSRError';
    }
}