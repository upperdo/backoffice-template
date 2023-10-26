import type { Handle } from "@sveltejs/kit";
import CONSTANTS from "$lib/common/constants";
import SSRAppwriteClient from "$lib/platforms/appwrite/SSRAppwriteClient";
import type { AccountData } from "$lib/common/constants/types";

export const handle: Handle = async ({ event, resolve }) => {

    const session = event.cookies.get(`${CONSTANTS.getCookieName()}`);

    if(!session){
        return await resolve(event);
    }else{
        // Todo: Create a Model to do the type and Wait for SSR Support
        // @ts-ignore
        //const user: AccountData = await SSRAppwriteClient.getInstance(cookieName).account.get() as AccountData;
        //console.log("user", user);
    } 


    return await resolve(event);
}