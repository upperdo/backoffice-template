import type { PageServerLoad } from "./$types";
import type { LeadData } from "$lib/common/constants/types";
import { DatabaseService, StorageService } from "$lib/services";
import CONSTANTS from "$lib/common/constants";

export const load: PageServerLoad = async () => {

    return {
        leads: await DatabaseService.listDocuments<LeadData>(
            CONSTANTS.DATABASE_CONFIG.databases.test.id, 
            CONSTANTS.DATABASE_CONFIG.databases.test.collections.leads),
        files: await StorageService.listFiles(CONSTANTS.DATABASE_CONFIG.buckets.dev)
    }
}