import { createAppwriteSession, localStorageUtil } from '$lib/app/utils/';
import { config } from '$lib/app/config/';
import { DiContainer } from '$lib/infraestructure';

const { setAppwriteHeaders } = DiContainer;
const Storage = localStorageUtil();

export async function load({ locals, cookies }) {

    let authCookies: any = {};
    if (!locals.accoundData) {

    } else {
        const session = [createAppwriteSession(), createAppwriteSession(true)];
        const hash = cookies.get(session[0] ?? cookies.get(session[1])) ?? '';
        authCookies[createAppwriteSession()] = hash;
        setAppwriteHeaders({ hash: Storage.serialize(authCookies), projectId: config.appwrite.projectId })
    }

    return {
        locals,
        headers: Storage.serialize(authCookies)
    }
}