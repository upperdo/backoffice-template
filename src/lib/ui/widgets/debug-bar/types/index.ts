type DebugVitalsData = {
    executionTime: number,
    memoryUsage: string
}

type DebugRouteData = {
    currentRoute: string
}

type DebugSessionData = {

}

type DebugRequestData = {

}

type DebugStoreData = {
    route: DebugRouteData;
    vitals: {
        executionTime?: number,
        memoryUsage?: number
    }
    request: DebugRequestData | {};
    session: DebugSessionData | {};
    logs: any[] | []
}

export type {
    DebugStoreData, DebugVitalsData,
    DebugRequestData, DebugRouteData,
    DebugSessionData
}