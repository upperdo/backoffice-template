import { InitAccountStore } from "$lib/stores";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({ locals }) => {

    if(locals?.accoundData){
        await InitAccountStore(locals.accoundData);
    }else{
        await InitAccountStore();
    }

    return {
        accountData: locals?.accoundData
    }
}