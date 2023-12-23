import { writable, type Writable } from "svelte/store";

export const SearchStore: Writable<string> = writable('');