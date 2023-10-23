import { InitAccountStore } from "$lib/stores";

export const load = async() => {
    await InitAccountStore();
}