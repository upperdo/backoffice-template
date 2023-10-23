import { redirect } from "@sveltejs/kit";
import { browser } from "$app/environment";

/**
 * @name BrowserRedirectTo
 * @param route 
 * 
 * @description Redirect to a diferent route in browser only.
 * @returns {void}
 */

export const BrowserRedirectTo = (route: string): void => {
    if(browser){
        throw redirect(301, route);
    }
}