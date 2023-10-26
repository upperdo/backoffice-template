import { PUBLIC_DEBUG, PUBLIC_SELECTED_PLATFORM } from "$env/static/public";
import type { CoreData } from "./types";
/**
 * @type {string}
 * @description This constant are all the core and other constants that dont need a file
 */

const CORE: CoreData = {
    defaultLocale: 'en_US',
    storageLocalePropertyName: 'locale',
    selectedPlatform: PUBLIC_SELECTED_PLATFORM || 'appwrite',
    cookieName: 'a_session_65362ff2bb43ea762b02_legacy',
    seoConfig: {
        title: 'App Name',
        company: 'Your Company',
        description: 'Your description goes here',
        favicon: {},
    },
    languageList: [
        {
            label: 'Español',
            value: 'es_DO'
        },
        {
            label: 'English',
            value: 'en_US'
        }
    ],
    debug: PUBLIC_DEBUG || false,
}

export default CORE;