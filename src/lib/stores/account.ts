import type { AccountData } from "$lib/common/constants/types";
import { writable, type Writable } from "svelte/store";

/**
 * @name AccountStore
 * 
 * @description Get the currently logged in user.
 * @returns {AccountData | null}
 */
export const AccountStore: Writable<AccountData> = writable(null);