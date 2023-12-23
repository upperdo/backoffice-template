import { invalidate } from "$app/navigation";

export function reloadData(path:string){
    invalidate((url) => url.pathname === path);
}