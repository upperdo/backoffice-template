import type { Handle } from "@sveltejs/kit";
import type { DebugStoreData } from "$lib/ui/widgets/debug-bar/types";
import { getMemoryUsageInMB } from "$lib/ui/widgets/debug-bar/utils/getMemoryUsageInMb";

export const handle: Handle = async ({ event, resolve }) => {

    const memoryUsage = getMemoryUsageInMB();

    return resolve(event);
}