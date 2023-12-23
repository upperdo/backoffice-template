export class AddressServiceError extends Error {
    constructor(message: string){
        super(message);
        this.message = 'OrderServiceError';
    }
}

export class ListAddressError extends AddressServiceError {
    constructor() {
      super('Error listing addresses');
      this.message = 'ListAddressError';
    }
  }
  
  export class GetAddressError extends AddressServiceError {
    constructor() {
      super('Error getting address');
      this.message = 'GetAddressError'
    }
  }
  
  export class UpdateAddressError extends AddressServiceError {
    constructor() {
      super('Error updating address');
      this.message = 'UpdateAddressError'
    }
  }
  
  export class DeleteAddressError extends AddressServiceError {
    constructor() {
      super('Error deleting address');
      this.message = 'DeleteAddressError'
    }
  }
  
  export class CreateAddressError extends AddressServiceError {
    constructor() {
      super('Error creating address');
      this.message = 'CreateAddressError'
    }
  }