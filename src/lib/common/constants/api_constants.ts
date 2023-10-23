import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_API_VERSION, PUBLIC_APPWRITE_PROJECT_ID } from "$env/static/public";


/**
 * @type {string}
 * @description This constant contains all the related api keys, endpoints etc
 */

const API_CONSTANTS = {
    APPWRITE_ENDPOINT: `${PUBLIC_APPWRITE_ENDPOINT}/${PUBLIC_APPWRITE_API_VERSION}` || "http://localhost/v1",
    PROJECT_ID: PUBLIC_APPWRITE_PROJECT_ID || "your-project-id",
}

export  default API_CONSTANTS;
