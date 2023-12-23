import * as configParams from "./config.json";

export const config = {
    ...configParams,
}

if(import.meta.env.VITE_ENVIRONMENT.toLocaleLowerCase() === 'development'){
    config.appwrite.endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
    config.appwrite.projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    config.storage = import.meta.env.VITE_APPWRITE_BUCKET_ID;
    config.appwrite.ssrDomain = import.meta.env.PUBLIC_APPWRITE_SSRHOSTNAME
}

if(import.meta.env.VITE_ENVIRONMENT.toLocaleLowerCase() === 'production'){
    config.appwrite.endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT_PROD;
    config.appwrite.projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID_PROD;
    config.storage = import.meta.env.VITE_APPWRITE_BUCKET_ID_PROD;
    config.appwrite.ssrDomain = import.meta.env.PUBLIC_APPWRITE_HOSTNAME_PROD
}

config.stripe.public_key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
config.stripe.secret_key = import.meta.env.VITE_STRIPE_SECRET_KEY;
config.site.maintenance = import.meta.env.VITE_MAINTENANCE.toLocaleLowerCase() === 'true' ? true : false;