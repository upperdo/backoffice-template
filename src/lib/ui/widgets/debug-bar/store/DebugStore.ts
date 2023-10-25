import { type Writable, writable } from "svelte/store";
import type { DebugStoreData } from "../types";


const defaultInitialValue: DebugStoreData = {
    logs: [],
    request: {},
    route: {
        currentRoute: ''
    },
    session: {},
    vitals: {
        executionTime: 0,
        memoryUsage: 0
    }
}
const DebugStore: Writable<DebugStoreData> = writable(defaultInitialValue);


const UpdateDebugStore = (data: DebugStoreData): void => {
    DebugStore.set(data);
}

export {
    DebugStore,
    UpdateDebugStore
}