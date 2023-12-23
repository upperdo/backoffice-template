import { fail, redirect, type Actions } from "@sveltejs/kit";
import { DiContainer } from "$lib/infraestructure";
const { accountService } = DiContainer;

import type { PageServerLoad } from "./$types";
import type { Credentials } from "$lib/data-access/AccountDto";


export const load: PageServerLoad = async () => { }

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();

        const email = String(data.get('email'));
        const password = String(data.get('password'));

        if (typeof email !== 'string' || typeof password !== 'string') {
            return fail(400, { invalid: true });
        }

        const credentials: Credentials = { email, password };
        const response = await accountService.createEmailSessionSsr({ credentials, cookies });

        if (!response) {
            return fail(400, { invalid: true });
        }

        throw redirect(302, '/dashboard')
    }
}