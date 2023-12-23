export class AddressBaseError extends Error {
    constructor(message: string){
        super(message);
        this.message = 'AddressBaseError';
    }
}

export class ListAddressError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred listing your orders');
        this.message = 'ListAddressError';
    }
}

export class GetAddressError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred getting an order');
        this.message = 'GetAddressError'
    }
}

export class UpdateAddressError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred getting an order');
        this.message = 'UpdateAddressError'
    }
}

export class CreateAddressError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred getting an order');
        this.message = 'CreateAddressError'
    }
}

export class CreateContactError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred creating a contact');
        this.message = 'CreateContactError'
    }
}

export class DeleteAddressError extends AddressBaseError {
    constructor(message?: string) {
        super(message || 'An error occurred getting an order');
        this.message = 'DeleteAddressError'
    }
}