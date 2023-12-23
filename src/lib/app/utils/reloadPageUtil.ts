import { browser } from "$app/environment";
import { goto } from "$app/navigation";

export function reloadPage(){
    if(browser){
        const thisPage = window.location.pathname;

        //goto('/').then(() => goto(thisPage));
        window.location.reload();
    }
}