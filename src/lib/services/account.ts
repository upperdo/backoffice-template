import { LoggerUtility } from "$lib/common/logger/logger_utility";
import type { SessionData, AccountData } from "$lib/common/constants/types";
import BackendPlatform from "$lib/platforms";

/**
 * @name createEmailSession
 * @param email 
 * @param password 
 * @param logger 
 * @description Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
 */
async function createEmailSession(email: string, password:string, logger: typeof LoggerUtility = LoggerUtility): Promise<SessionData| null>{
    const filePath = "lib/services/databases/ createEmailSession";
    try {
        // @ts-ignore
        return await BackendPlatform.account.createEmailSession(email, password);
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null
    }
}

async function createJwt(logger: typeof LoggerUtility = LoggerUtility){
    const filePath = "lib/services/databases/ createJwt";
    try {

       return await BackendPlatform.account.createJWT();
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null
    }
}

/**
 * @name getAccount
 * @param logger 
 * @description Get the currently logged in user.
 * @returns AccountData
 */
async function getAccount(logger: typeof LoggerUtility = LoggerUtility): Promise<AccountData | null>{
    const filePath = "lib/services/databases/ getAccount";

    try {
        const result = await BackendPlatform.account.get();
        // @ts-ignore
        return result;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
        return null
    }
}

/**
 * @name deleteSession
 * @param sessionId 
 * @param logger 
 * @description Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use Delete Sessions instead.
 * @returns void
 */
async function deleteSession(sessionId:string = 'current', logger: typeof LoggerUtility = LoggerUtility): Promise<void> {
    const filePath = "lib/services/databases/ logout";
    try {
        await BackendPlatform.account.deleteSession(sessionId);
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }
    }
}

export {
    createJwt,
    createEmailSession,
    getAccount,
    deleteSession
}