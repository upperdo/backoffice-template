import { browser } from "$app/environment";
import { goto } from "$app/navigation";

/**
 * @name BrowserRedirectTo
 * @param route 
 * 
 * @description Redirect to a diferent route in browser only.
 * @returns {void}
 */

export const BrowserRedirectTo = (route: string): void => {
    if(browser){
        goto(route)
    }
}