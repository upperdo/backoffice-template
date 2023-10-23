import { Client, Storage, ID, 
    Databases, Functions, 
    Account, Avatars, Permission, 
    Query, Role, AppwriteException, 
    Graphql, Locale, Teams 
} from "appwrite";

import CONSTANTS from "$lib/common/constants";

const client = new Client()
.setEndpoint(CONSTANTS.API_CONSTANTS.APPWRITE_ENDPOINT)
.setProject(CONSTANTS.API_CONSTANTS.PROJECT_ID);

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);
const functions = new Functions(client);
const teams = new Teams(client);
const locale = new Locale(client);
const graphql = new Graphql(client);
const avatars = new Avatars(client);

export {
    account,
    storage,
    databases,
    functions,
    teams,
    locale,
    graphql,
    avatars,
    AppwriteException,
    Permission,
    Query,
    Role,
    ID
}