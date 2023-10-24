/**
 * @name SessionData
 * @description New session for the user that wants to login,
 */
type SessionData = {
    $id: string
    $createdAt: string
    userId: string
    expire: string
    provider: string
    providerUid: string
    providerAccessToken: string
    providerAccesTokenExpiry: string
    providerRefreshToken: string
    ip: string
    osCode: string
    osName: string
    osVersion: string
    clientType: string
    clientCode: string
    cientName: string
    clientEngineVersion: string
    deviceName: string
    deviceBrand: string
    countryCode: string
    countryName: string
    current: boolean
} | null;
/**
 * @name AccountData
 * @description Current logged in user account information
 */
type AccountData = {
    $id: string
    $createdAt: string
    $updatedAt: string
    name: string
    hash: string
    hashOptions: {}
    registration: string,
    status: boolean
    labels: string
    passwordUpdate: string
    email: string
    phone: string
    emailVerification: boolean
    phoneVerification: boolean
    prefs: {}
    accessedAt: string
} | null;

type GlobalDocumentProperties = {
    $id: string,
    $collectionId: string
    $databaseId: string
    $createdAt: string
    $updatedAt: string
    $permissions: string
}

type UserData = {
    name?: string
    lastName?: string
    roles: string[]
} & GlobalDocumentProperties;



type ExtraData = {
    [key: string]: any,
}

type LanguageListData = { label: string, value: string }

type CoreData = {
    defaultLocale: string;
    storageLocalePropertyName: string,
    selectedPlatform: string
    languageList: LanguageListData[],
    seoConfig: SEO
} & ExtraData;


type DocumentListData<T> = {
    total: number
    documents: T[];
}

type DocumentData<T> = T & GlobalDocumentProperties;

type SEO = {
    title: string,
    company: string;
    description: string,
    canonical?: string,
    apple_touch_icon?: string,
    favicon: {
        32?: string,
        16?: string
    },
    manifest?: string,
    maskIcon?: string,
    og?: {
        title: string,
        locale: string,
        type: string,
        description: string,
        url: string,
        site_name: string,
        modified_time: string,
        image: string,
        image_w: string,
        image_h: string,
        image_type: string,
    },
    twitter?: {
        card: string,
    }
}

export enum ExecutionTriggers {
    http,
    schedule,
    event
}

export enum ExecutionStatus {
    processing,
    completed,
    failed
}


type CommonExecutionProperties<T> = {
    $id: string
    $createdAt: string
    $updatedAt: string
    $permissions: string[]
    funtionId?: string
    $trigger?: ExecutionTriggers
    status: ExecutionStatus
    requestMethod: string
    requestPath: string
    requestHeaders: ExtraData[]
    responseStatusCode: number
    responseBody: T
    responseHeaders: ExtraData[]
    logs: string
    errors: string
    duration: number
}

type ExecutionListData<T> = {
    total: number
    executions: T[]
}

type ExecutionPlaceHolderData = {

} 

type ExecutionData<T> = {

} & CommonExecutionProperties<T>;

type LeadData = {
    name: string
    lastName: string
    isActive: boolean | false
}

export type {
    AccountData, SessionData, CoreData,
    LanguageListData, DocumentListData,
    UserData, GlobalDocumentProperties, DocumentData,
    SEO, CommonExecutionProperties, ExecutionListData,
    ExecutionPlaceHolderData,
    ExecutionData, ExtraData, LeadData
};