import type { User } from "$lib/common/constants";
import { writable, type Writable } from "svelte/store";


export const user: Writable<User> = writable(null);