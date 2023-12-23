export class AddressEntity {
    private readonly $id: string;
    private readonly isDefault: boolean;
    private readonly name: string;
    private readonly lastName?: string;
    private readonly address1: string;
    private readonly address2?: string;
    private readonly city: string;
    private readonly phone: string;
    private readonly zipCode?: number;
    private readonly customerId: string;
    private readonly company?: string;
    private readonly $createdAt: Date;
    private readonly $updatedAt: Date;
  
    constructor({
      $id,
      isDefault,
      name,
      lastName,
      address1,
      address2 = '',
      city,
      phone,
      zipCode = 0,
      customerId,
      company = '',
      $createdAt,
      $updatedAt,
    }: {
      $id: string;
      isDefault: boolean;
      name: string;
      lastName?: string;
      address1: string;
      address2?: string;
      city: string;
      phone: string;
      zipCode?: number;
      customerId: string;
      company?: string;
      $createdAt: Date;
      $updatedAt: Date;
    }) {
      this.$id = $id;
      this.isDefault = isDefault;
      this.name = name;
      this.lastName = lastName;
      this.address1 = address1;
      this.address2 = address2;
      this.company = company;
      this.city = city;
      this.phone = phone;
      this.zipCode = zipCode;
      this.customerId = customerId;
      this.$createdAt = $createdAt;
      this.$updatedAt = $updatedAt;
    }
  
    get addressId(): string {
      return this.$id;
    }
  
    get addressIsDefault(): boolean {
      return this.isDefault;
    }
  
    get addressName(): string {
      return this.name;
    }
  
    get addressLastName(): string {
      return this.lastName || '';
    }
  
    getAddress1(): string {
      return this.address1;
    }
  
    getAddress2(): string {
      return this.address2 || '';
    }
  
    get addressCity(): string {
      return this.city;
    }
  
    get addressPhone(): string {
      return this.phone;
    }
  
    get addressZipCode(): number {
      return this.zipCode || 0;
    }
  
    get addressCustomerId(): string {
      return this.customerId;
    }
  
    get addressCompany(): string {
      return this.company || '';
    }
  
    get addressCreatedAt(): Date {
      return new Date(this.$createdAt);
    }
  
    get addressUpdatedAt(): Date {
      return new Date(this.$updatedAt);
    }
  }
  