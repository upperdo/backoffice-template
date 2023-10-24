import type { PageServerLoad } from "./$types";
import type { LeadData } from "$lib/common/constants/types";
import { DatabaseService } from "$lib/services";

export const load: PageServerLoad = async () => {
    const leads = await DatabaseService.listDocuments<LeadData>('test', 'leads');
    
    return {
        leads
    }
}