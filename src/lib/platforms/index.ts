import CONSTANTS from "$lib/common/constants";
import * as Appwrite from "./appwrite";

let selectedPlatform;

switch(CONSTANTS.CORE.selectedPlatform){
    case 'appwrite':
        selectedPlatform = Appwrite;
        break;
    case 'supabase':
        break;
    default:
        selectedPlatform = Appwrite;
}

const BackendPlatform = selectedPlatform as typeof Appwrite;

export default BackendPlatform;