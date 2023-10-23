/**
 * @class
 * @name Localization
 * @description Localization utility class to load language file to the application.
 */
class Localization {
    // Define the language property
    static language: { [key: string]: any } = {};

    /**
     * @name loadLanguage
     * @param languageCode
     * @description Load the language from the localization folder
     */
    static async loadLanguage(languageCode:string = 'en_US') {
        try {
            const language = await import(`$lib/localization/${languageCode}/index.ts`);
            this.language = language.default;
        } catch (error) {
            //console.error(`Failed to load language for ${languageCode}. Using default language.`, error);
            const defaultLanguage = await import(`$lib/localization/en_US/index`);
            this.language = defaultLanguage.default;
        }
    }
}

export default Localization;