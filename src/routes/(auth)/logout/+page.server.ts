import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import CONSTANTS from "$lib/common/constants";
import { AccountService } from "$lib/services";

export const load: PageServerLoad = async ({}) => {
    throw redirect(302, '/');
}

export const actions: Actions =  {
    async default({ cookies }){
        const cookiesToDelete = [`${CONSTANTS.getCookieName()}`, 'a_session_t', 'x'];
        await AccountService.deleteSession();
        cookiesToDelete.map((co) => {
            cookies.set(`${co}`, '', {
                path: '/',
                expires: new Date(0)
            });
        })

        throw redirect(302, '/login')
    },
}