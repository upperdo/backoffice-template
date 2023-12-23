import { browser } from "$app/environment";

/**
 * @name goBackFunction
 * @description Util to go back to previous page
 */
export function goBackFunction():void {
    if(browser){
        window.history.back();
    }
}