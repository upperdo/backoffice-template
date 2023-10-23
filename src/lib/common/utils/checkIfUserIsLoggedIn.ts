import CONSTANTS from "$lib/common/constants";
import { BrowserRedirectTo } from "$lib/common/utils";
import type { AccountData } from "../constants/types";


/**
 * @name CheckIfUserIsLoggedIn
 * @param isLoggedIn 
 * @description Verify if the current user is logged in, if not redirect to login.
 * @returns {void}
 */

export const CheckIfUserIsLoggedIn = (isLoggedIn: AccountData): void => {
    switch (true){
        case isLoggedIn == null || !isLoggedIn:
            BrowserRedirectTo(CONSTANTS.APP_PATHS.routes.login)
            break;
        
        case isLoggedIn?.emailVerification === false:
            break;

        default:
            BrowserRedirectTo(CONSTANTS.APP_PATHS.routes.backoffice)
    }
}