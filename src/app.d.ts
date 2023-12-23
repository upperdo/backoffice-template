import type { AccountData } from "$lib/common/constants/types";
import type { DebugStoreData } from "$lib/ui/widgets/debug-bar/types";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			debugData: DebugStoreData,
			accoundData: AccountData<any> | null,
			ssrTokenExpired: boolean
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
