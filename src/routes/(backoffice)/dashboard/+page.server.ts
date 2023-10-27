import type { PageServerLoad } from "./$types";
import type { LeadData } from "$lib/common/constants/types";
import { DatabaseService, StorageService, FunctionService } from "$lib/services";
import CONSTANTS from "$lib/common/constants";

export const load: PageServerLoad = async () => {
    const payload = {};
    //const functions = await FunctionService.createExecution('userActionControl', JSON.stringify(payload));


    return {
        
    }
}