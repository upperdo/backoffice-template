import { writable, type Writable } from "svelte/store";
import type { AccountDto } from "$lib/data-access/AccountDto";


// Stores
export const AccountStore: Writable<AccountDto<any>> = writable();


// Updates
export async function InitAccountStore(account: AccountDto<any>) {
    AccountStore.set(account);
}
