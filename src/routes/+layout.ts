import { InitAccountStore, AccountStore } from "$lib/stores";
import { CheckIfUserIsLoggedIn } from "$lib/common/utils";
import { UpdateDebugStore } from "$lib/ui/widgets/debug-bar/store/DebugStore.js";
import { get } from "svelte/store";

export async function load({ }){   
        await InitAccountStore();
        const accountData = get(AccountStore);
        if(accountData){
            
        }
        CheckIfUserIsLoggedIn(accountData);

        const debugStoreData = {
                route: {
                    currentRoute:  '',
                },
                vitals: {
                    executionTime: 0,
                    memoryUsage: 120
                },
                request: {

                },
                session: {
        
                },
                logs: []
            }
            UpdateDebugStore(debugStoreData);
}