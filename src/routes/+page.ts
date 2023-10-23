import { get } from "svelte/store";
import { AccountStore } from "$lib/stores";
import { CheckIfUserIsLoggedIn } from "$lib/common/utils";

export const load = async() => {
    const isLoggedIn = get(AccountStore);

    CheckIfUserIsLoggedIn(isLoggedIn);
}