import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import CONSTANTS from "$lib/common/constants";

export const load: PageServerLoad = async ({}) => {
    throw redirect(302, '/');
}

export const actions: Actions = {
    default({ cookies }){
        cookies.set(`${CONSTANTS.getCookieName()}`, '', {
            path: '/',
            expires: new Date(0)
        });

        throw redirect(302, '/login')
    },
}