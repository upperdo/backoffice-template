import { InitLocaleStore } from "$lib/stores/locale";
import { StorageUtility } from "../local_storage/storage_utility";
import CONSTANTS from "../constants";

/**
 * @name languageSwitcherFunc
 * @param languageCode 
 * @description Utility function to switch the application language
 * @returns {void}
 */
export const languageSwitcherFunc = (languageCode: string) : void => {
    if(languageCode){
        StorageUtility.saveData(CONSTANTS.CORE.storageLocalePropertyName, languageCode);
        InitLocaleStore(languageCode, StorageUtility.getData, StorageUtility.saveData)
    };
}