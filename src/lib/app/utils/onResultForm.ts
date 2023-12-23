import { goto } from "$app/navigation";
import { redirect, type ActionResult } from "@sveltejs/kit";

export function onResultForm(result: ActionResult, path: string = '/', redirectCode: 302 | 300 | 301 | 303 | 304 | 305 | 306 | 307 | 308 = 302) {
    if(result.type === 'success'  && result.status === 200){
        goto(path);
        throw redirect(redirectCode, path);
    }
}