import API_CONSTANTS from "./api_constants";
import IMAGE_STRINGS from "./image_strings";
import SIZES from "./sizes";
import TEXTS from "./texts";
import COLORS from "./colors";
import ENUMS from "./enums";
import APP_PATHS from "./paths";
import CORE from "./core";
import { DATABASE_CONFIG } from "./database";
import ROLES from "./roles";
import EVENTS from "./events";



/**
 * @name string Here is the main entry file for all the constants.
 */
const CONSTANTS = {
    API_CONSTANTS,
    IMAGE_STRINGS,
    TEXTS,
    SIZES,
    COLORS,
    ENUMS,
    APP_PATHS,
    CORE,
    DATABASE_CONFIG,
    ROLES,
    EVENTS,
    getCookieName: () => `a_session_${API_CONSTANTS.PROJECT_ID}_legacy`,
    
}
export default CONSTANTS;