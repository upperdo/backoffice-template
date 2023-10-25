import { InitAccountStore, AccountStore } from "$lib/stores";
import { CheckIfUserIsLoggedIn } from "$lib/common/utils";
import { UpdateDebugStore } from "$lib/ui/widgets/debug-bar/store/DebugStore.js";
import { DebugStore } from "$lib/ui/widgets/debug-bar/store/DebugStore.js";
import { get } from "svelte/store";

export async function load({parent}){   
        let start = performance.now();
        await InitAccountStore();
        const accountData = get(AccountStore);
        if(accountData){
            
        }
        CheckIfUserIsLoggedIn(accountData);
        let end = performance.now();

        let responseTime = end -start;

        const debugStoreData = {
                route: {
                    currentRoute:  '',
                },
                vitals: {
                    executionTime: responseTime,
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