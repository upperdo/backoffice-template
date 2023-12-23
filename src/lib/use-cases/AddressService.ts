import type { ListAddress, CreateAddress, DeleteAddress, GetAddress, UpdateAddress, AddressDTO, GetDefaultAddress } from "$lib/data-access/AddressDto";
import type { BackendServiceContext, BackendServiceInterface } from "$lib/infraestructure/BackendServiceInterface";
import { ListAddressError, CreateAddressError, DeleteAddressError, GetAddressError, UpdateAddressError } from "./errors/AddressErrors";
import type { createFilter, AppwriteUtils } from "$lib/app/utils";
import type { AccountService } from "./AccountService";
import { AuthenticationError } from "./errors/AccountErrors";
import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";

function toDtoMapper(address: AddressDTO): Partial<AddressDTO> {
    return {
        isDefault: address.isDefault,
        name: address.name,
        lastName: address.lastName || '',
        address1: address.address1 || '',
        address2: address.address2 || '',
        city: address.city,
        phone: address.phone,
        zipCode: address.zipCode || 0,
        customerId: address.customerId,
        company: address.company || '',
    }
}

export class AddressService {
    private accountDataAccess: {
        listAddress: typeof ListAddress;
        createAddress: typeof CreateAddress;
        deleteAddress: typeof DeleteAddress;
        getAddress: typeof GetAddress;
        updateAddress: typeof UpdateAddress;
        getDefaultAddress: typeof GetDefaultAddress
    }
    private readonly appwriteUtils: typeof AppwriteUtils;
    private readonly filterService: typeof createFilter;
    private readonly accountService: AccountService;
    private backendService: BackendServiceInterface;
    private backendContext: BackendServiceContext;

    constructor(
        accountDataAccess: {
            listAddress: typeof ListAddress,
            createAddress: typeof CreateAddress,
            deleteAddress: typeof DeleteAddress,
            getAddress: typeof GetAddress,
            updateAddress: typeof UpdateAddress,
            getDefaultAddress: typeof GetDefaultAddress,
        },
        backend: {
            backendService: BackendServiceInterface,
            backendContext: BackendServiceContext
        },
        accountService: AccountService,
        filterService: typeof createFilter,
        appwriteUtils: typeof AppwriteUtils
    ) {
        this.accountDataAccess = accountDataAccess;
        this.backendContext = backend.backendContext;
        this.backendService = backend.backendService;
        this.filterService = filterService;
        this.accountService = accountService;
        this.appwriteUtils = appwriteUtils;
    }

    async listAddress(options: QueryOptions, extra: string = ''): Promise<AddressDTO[]> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            const response = await this.accountDataAccess.listAddress({ options, filter: this.filterService, customerId: account.$id!, extraFilter: extra }, this.backendService, this.backendContext);
            return response;
        } catch (err) {
            throw new ListAddressError()
        }
    }

    async getDefaultAddress(): Promise<AddressDTO | null> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            const response = await this.accountDataAccess.getDefaultAddress({ customerId: account.$id! }, this.backendService, this.backendContext);
            return response;
        } catch (err) {
            throw new ListAddressError()
        }
    }

    async getAddress(addressId: string): Promise<AddressDTO> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            const response = await this.accountDataAccess.getAddress(addressId, this.backendService, this.backendContext);
            return response;
        } catch (err) {
            throw new GetAddressError()
        }
    }
    async updateAddress(data: any, addressId: string): Promise<AddressDTO> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            data.customerId = account.$id!;

            const response = await this.accountDataAccess.updateAddress({ addressId, data, customerId: account.$id, utils: this.appwriteUtils }, this.backendService, this.backendContext);
            return response;
        } catch (err) {
            throw new UpdateAddressError()
        }
    }

    async setDefaultAddress(addressId: string): Promise<boolean> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }


            const filter: QueryOptions = {
                limit: 1,
                filter: {},
                search: '',
                sort: { key: '$createdAt', order: 'desc' }
            }

            const data = { isDefault: true }
            const extraFilter = `equal('isDefault', ${data.isDefault})`;
            const defaultAddressExist = await this.listAddress(filter, extraFilter);


            if (defaultAddressExist.length <= 0) {
                await this.updateAddress(data, addressId);
                return true;
            }

            const response = await Promise.all([
                await this.updateAddress({ isDefault: false }, defaultAddressExist[0].$id),
                await this.updateAddress(data, addressId)
            ]);


            if (!response) return false;
            return true;
        } catch (err) {
            throw new UpdateAddressError()
        }
    }
    async createAddress(data: any): Promise<AddressDTO> {
        try {

            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            const newAddress = toDtoMapper(data);

            const response = await this.accountDataAccess.createAddress({ data: newAddress, customerId: account.$id!, utils: this.appwriteUtils }, this.backendService, this.backendContext);
            return response;
        } catch (err) {
            throw new CreateAddressError()
        }
    }
    async deleteAddress(addressId: string): Promise<void> {
        try {
            const account = await this.accountService.getAccount();

            if (!account) {
                throw new AuthenticationError()
            }

            await this.accountDataAccess.deleteAddress(addressId, this.backendService, this.backendContext)
        } catch (err) {
            throw new DeleteAddressError()
        }
    }
}