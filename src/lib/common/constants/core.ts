import { PUBLIC_SELECTED_PLATFORM } from "$env/static/public";
import type { CoreData } from "./types";
/**
 * @type {string}
 * @description This constant are all the core and other constants that dont need a file
 */

const CORE: CoreData = {
    defaultLocale: 'en_US',
    storageLocalePropertyName: 'locale',
    selectedPlatform: PUBLIC_SELECTED_PLATFORM || 'appwrite',
    languageList: [
        {
            label: 'Español',
            value: 'es_DO'
        },
        {
            label: 'English',
            value: 'en_US'
        }
    ]
}

export default CORE;