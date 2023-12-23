import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { createAppwriteSession } from "$lib/app/utils";
import { DiContainer } from "$lib/infraestructure";

const { accountService } = DiContainer;

export const load: PageServerLoad = async ({ }) => {
    throw redirect(302, '/login');
}

export const actions: Actions = {
    async default({ cookies }) {
        const cookiesToDelete = [createAppwriteSession(), createAppwriteSession(true), 'a_session_t', 'x'];
        await accountService.logout();
        cookiesToDelete.map((co) => {
            cookies.set(`${co}`, '', {
                path: '/',
                expires: new Date(0)
            });
        })

        throw redirect(302, '/login')
    },
}