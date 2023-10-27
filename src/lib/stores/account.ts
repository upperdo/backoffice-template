import type { AccountData, SessionData } from "$lib/common/constants/types";
import BackendPlatform from "$lib/platforms";
import { writable, type Writable } from "svelte/store";

/**
 * @name AccountStore
 * 
 * @description Get the currently logged in user.
 * @returns AccountData | null
 */
export const AccountStore: Writable<AccountData> = writable(null);

/**
 * @name InitAccountStore
 * @description Initialize AccountStore
 * @returns Promise void
 */
export const InitAccountStore = async (store?: AccountData): Promise<void> => {
    try {
        
        if(!store){
            // @ts-ignore
            AccountStore.set(await BackendPlatform.account.get());
        }else{
            // @ts-ignore
            AccountStore.set(store);
        }
        
    }catch(e){
        AccountStore.set(null);
    }
}

/**
 * @name LogoutAccountStore
 * @description Clear AccountData from AccountStore
 * @returns void
 */
export const LogoutAccountStore = (): void =>{
    AccountStore.set(null);
}

export const SessionStore: Writable<SessionData> = writable(null);