import { localStorageUtil } from '$lib/app/utils';
import { createAppwriteSession } from '$lib/app/utils';

import { config } from '$lib/app/config';
import { DiContainer } from '$lib/infraestructure';
import { redirect } from '@sveltejs/kit';
const { accountService, setAppwriteHeaders } = DiContainer;

const Storage = localStorageUtil();

export async function handle({ event, resolve }) {
    const sessions = [createAppwriteSession(), createAppwriteSession(true)];

    const hash = event.cookies.get(sessions[0] ?? sessions[1]) ?? '';
    const authCookies: any = {};
    authCookies[createAppwriteSession()] = hash;
    setAppwriteHeaders({ hash: Storage.serialize(authCookies), projectId: config.appwrite.projectId })

    if (!hash) {
        return await resolve(event);
    }

    const account = await accountService.getAccount();

    if (account) {
        event.locals.accoundData = account;
    }

    if (!account) {
        throw redirect(303, '/auth/login');
    }

    return resolve(event);
}