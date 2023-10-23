import { InitAccountStore, AccountStore } from "$lib/stores";
import { CheckIfUserIsLoggedIn } from "$lib/common/utils";
import { get } from "svelte/store";

export async function load(){
     await InitAccountStore();
        const accountData = get(AccountStore);
        if(accountData){
            
        }
        CheckIfUserIsLoggedIn(accountData);
}