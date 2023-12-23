import { ListAddressError, CreateAddressError, DeleteAddressError, GetAddressError, UpdateAddressError, CreateContactError } from "./errors/AddressError";
import type { BackendServiceContext, BackendServiceInterface } from "$lib/infraestructure/BackendServiceInterface";
import type { CommonProperties } from "$lib/app/types/interfaces/CommonPropertiesInterface";
import { AddressEntity } from "$lib/entities/address";
import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";
import type { createFilter, AppwriteUtils } from "$lib/app/utils";
import type { ListDocumentInterface } from "$lib/app/types/interfaces/ListDocumentsInterface";

export interface AddressDTO extends CommonProperties {
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
}

function toDtoMapper(address: AddressEntity): AddressDTO {
    return {
        $id: address.addressId,
        isDefault: address.addressIsDefault,
        name: address.addressName,
        lastName: address.addressLastName,
        address1: address.getAddress1(),
        address2: address.getAddress2(),
        city: address.addressCity,
        phone: address.addressPhone,
        zipCode: address.addressZipCode,
        customerId: address.addressCustomerId,
        company: address.addressCompany,
        $createdAt: address.addressCreatedAt,
        $updatedAt: address.addressUpdatedAt
    }
}

function toCreateAddressDtoMapper(address: AddressDTO): Partial<AddressDTO> {
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


export async function ListAddress(data: { options: QueryOptions, customerId: string, filter: typeof createFilter, extraFilter?: string }, service: BackendServiceInterface, context: BackendServiceContext): Promise<AddressDTO[]>{
    try {
        const queries = [`equal('customerId', ${data.customerId})`, ...data.filter(data.options)];
        if(data.extraFilter){
            queries.push(data.extraFilter)
        }
        const response = await service.listDocuments<ListDocumentInterface<AddressDTO>>(context, queries);
        return response.documents.map((address) => { return toDtoMapper(new AddressEntity(address)) })
    } catch( err ){
        throw new ListAddressError();
    }
}

export async function GetDefaultAddress(data: { customerId: string}, service: BackendServiceInterface, context: BackendServiceContext): Promise<AddressDTO | null>{
    try {
        const queries = [`equal('customerId', ${data.customerId})`, `equal('isDefault', ${true})`]
        const response = await service.listDocuments<ListDocumentInterface<AddressDTO>>(context, queries);
        if(response.total > 0){
            return toDtoMapper(new AddressEntity(response.documents[0]));
        }
        return null;
    } catch( err ){
        throw new ListAddressError();
    }
}

export async function GetAddress(addressId: string, service: BackendServiceInterface, context: BackendServiceContext): Promise<AddressDTO>{
    try {
        const response = await service.getDocument<AddressDTO>(context, addressId);
        return toDtoMapper(new AddressEntity(response));
    } catch( err ){
        throw new GetAddressError();
    }
}

export async function CreateAddress(data: { data: any, customerId: string, permissions?: string[], utils: typeof AppwriteUtils }, service: BackendServiceInterface, context: BackendServiceContext): Promise<AddressDTO>{
    try {
        const { Role, Permission } = data.utils;
        const newAddress = toCreateAddressDtoMapper(data.data);
       
        const response = await service.createDocument<AddressDTO>(context, {...newAddress, customerId: data.customerId}, [
            Permission.read(Role.user(data.customerId)),
            Permission.update(Role.user(data.customerId)),
            Permission.delete(Role.user(data.customerId)),
        ]);
        return toDtoMapper(new AddressEntity(response));
    } catch( err ){
        throw new CreateAddressError();
    }
}

export async function UpdateAddress(data: { addressId: string, data: any, customerId: string,  utils: typeof AppwriteUtils }, service: BackendServiceInterface, context: BackendServiceContext): Promise<AddressDTO>{
    try {
        const { Role, Permission } = data.utils;
        const response = await service.updateDocument<AddressDTO>(context, data.addressId, data.data, [
            Permission.read(Role.user(data.customerId)),
            Permission.update(Role.user(data.customerId)),
            Permission.delete(Role.user(data.customerId)),
        ]);
        return toDtoMapper(new AddressEntity(response));
    } catch( err ){
        throw new UpdateAddressError();
    }
}
export async function DeleteAddress(addressId: string, service: BackendServiceInterface, context: BackendServiceContext): Promise<void>{
    try {
        await service.deleteDocument(context, addressId);
    } catch( err ){
        throw new DeleteAddressError();
    }
}

export async function CreateContact(data: { data: any}, service: BackendServiceInterface, context: BackendServiceContext): Promise<boolean>{
    try {
       const response  = await service.createDocument<any>(context, data.data);
       if(!response){
            return false
       }
       return true;
    } catch( err ){
        throw new CreateContactError();
    }
}