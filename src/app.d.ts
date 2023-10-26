// See https://kit.svelte.dev/docs/types#app

import type { AccountData } from "$lib/common/constants/types";
import type { DebugStoreData } from "$lib/ui/widgets/debug-bar/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			debugData: DebugStoreData,
			accoundData: AccountData
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
