// 
import appwriteService from '$lib/infraestructure/appwrite/AppwriteService';

// Utils
import { AppwriteUtils, createAppwriteSession, createFilter, splitCookie } from '$lib/app/utils';
import * as cookieNode from "cookie";

// DTO's
import { GetAccount, ListDevices, UpdateAccountEmail, UpdateAccountName, CreateAccount, UpdateAccountPassword, UpdateAccountPhone, CreateEmailSession, Logout } from '$lib/data-access/AccountDto';
import { ListAddress, GetAddress, CreateAddress, UpdateAddress, DeleteAddress, GetDefaultAddress } from '$lib/data-access/AddressDto';
import { AppwriteContextFactory } from './appwrite/AppwriteContextFactory';

// Services
import { AccountService } from '$lib/use-cases/AccountService';
import { AddressService } from '$lib/use-cases/AddressService';

// Config
import { config } from '$lib/app/config';

type DiContainerType = {
  accountService: AccountService;
  addressService: AddressService;
  setAppwriteHeaders: (params: { hash: string, projectId: string }) => void;
}

export const DiContainer: DiContainerType = initializeDiContainer();

function initializeDiContainer() {
  const accountService = new AccountService({
    getAccount: GetAccount,
    createEmailSession: CreateEmailSession,
    listDevices: ListDevices,
    updateAccountPassword: UpdateAccountPassword,
    updateAccountPhone: UpdateAccountPhone,
    updateAccountEmail: UpdateAccountEmail,
    updateAccountName: UpdateAccountName,
    createAccount: CreateAccount,
    logout: Logout,
  },
    {
      cookieName: createAppwriteSession,
      split: splitCookie,
      parse: cookieNode.parse,
      appwriteUtils: AppwriteUtils,
    },
    {
      endpoint: config.appwrite.endpoint + '/account/sessions/email',
      projectId: config.appwrite.projectId,
      ssrDomain: config.appwrite.ssrDomain
    },
    appwriteService);

  const setAppwriteHeaders = (params: { hash: string, projectId: string }) => {
    appwriteService.setHeaders(params);
  };

  const addressService = new AddressService(
    {
      listAddress: ListAddress,
      getAddress: GetAddress,
      createAddress: CreateAddress,
      updateAddress: UpdateAddress,
      deleteAddress: DeleteAddress,
      getDefaultAddress: GetDefaultAddress
    },
    {
      backendContext: AppwriteContextFactory.addressContext(),
      backendService: appwriteService
    },
    accountService, createFilter, AppwriteUtils);

  return {
    accountService,
    addressService,
    setAppwriteHeaders
  };
}