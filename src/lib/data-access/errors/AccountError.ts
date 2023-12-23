export class AccountBaseError extends Error {
    constructor(message: string){
        super(message);
        this.message = 'CustomerBaseError';
    }
}

export class GetAccountError extends AccountBaseError {
    constructor() {
        super("An error occurred retrieving your account");
        this.message = 'GetAccountError';
    }
}

export class LogoutError extends AccountBaseError {
    constructor() {
        super("An error occurred deleting your account");
        this.message = 'LogoutError';
    }
}

export class ListDevicesError extends AccountBaseError {
    constructor() {
        super("An error occurred creating an email session");
        this.message = 'ListDevicesError';
    }
}

export class CreateEmailSessionError extends AccountBaseError {
    constructor() {
        super("An error occurred creating an email session");
        this.message = 'CreateEmailSessionError';
    }
}

export class CreateAccountError extends AccountBaseError {
    constructor() {
        super("An error ocurred Creating your Account");
        this.message = 'CreateAccountError';
    }
}

export class UpdateAccountPasswordError extends AccountBaseError {
    constructor() {
        super("An error occurred updating the account password");
        this.message = 'UpdateAccountPasswordError';
    }
}

export class UpdateAccountPhoneError extends AccountBaseError {
    constructor() {
        super("An error occurred updating the account phone");
        this.message = 'UpdateAccountPhoneError';
    }
}

export class UpdateAccountEmailerror extends AccountBaseError {
    constructor() {
        super("An error occurred updating the account email");
        this.message = 'UpdateAccountEmailerror';
    }
}

export class UpdateAccountNameError extends AccountBaseError {
    constructor() {
        super("An error occurred updating the account name");
        this.message = 'UpdateAccountNameError';
    }
}