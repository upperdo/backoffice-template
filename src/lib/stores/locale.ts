import { writable, type Writable } from "svelte/store";
import type lang from "$lib/localization/en_US/index";
import CONSTANTS from "$lib/common/constants";

/**
 * @name LocaleStore
 * @description Locale store that holds the locale to load the correct language of the app.
 */
export const LocaleStore: Writable<string> = writable('');

/**
 * @name LanguageStore
 * @description Language store that holds the app langauge
 * @usage $LanguageStore.property
 */
export const LanguageStore: Writable<typeof lang | { [key: string]: string }> = writable();

/**
 * @name InitLocaleStore
 * @param string [locale='en_US']
 * @param getLocaleFromStorage localStorage.getITem
 * @param saveLocaleToStorage localStorage.setItem
 * @description Init LocaleStorage using the saved locale or set the default one
 * @returns {void}
 */
export function InitLocaleStore(locale: string = CONSTANTS.CORE.defaultLocale, getLocaleFromStorage: typeof localStorage.getItem, saveLocaleToStorage: typeof localStorage.setItem): void {
    const isLocaleSavedToStore = getLocaleFromStorage(CONSTANTS.CORE.storageLocalePropertyName);
    if(!isLocaleSavedToStore){
        saveLocaleToStorage(CONSTANTS.CORE.storageLocalePropertyName, locale);
        LocaleStore.set(locale);
    }else{
        LocaleStore.set(isLocaleSavedToStore);
    }
}