import { fail, redirect } from "@sveltejs/kit";
import type { Actions, Action, PageServerLoad } from "../../(backoffice)/dashboard/$types";
import CONSTANTS from "$lib/common/constants";
import { parseCookie } from "$lib/common/utils/parseCookie";
import { SleepUtil } from "$lib/common/utils";


export const load: PageServerLoad = async ({  }) => {
    return {
        
    }
}

const login: Action = async ({ cookies, request, fetch, locals }) => {
    const data = await request.formData();

    const email = data.get('email');
    const password = data.get('password');

    if(typeof email !== 'string' || typeof password !== 'string'){
        return fail(400, { invalid: true })
    }

   const response = await fetch(`${CONSTANTS.API_CONSTANTS.APPWRITE_ENDPOINT}/account/sessions/email`, {
        method: 'POST',
        headers: {
            "x-appwrite-project": CONSTANTS.API_CONSTANTS.PROJECT_ID,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
   });

   const json = await response.json();


   if(json.code >= 400){
    return fail(json.code, { credentials: true })
   }
  
   const cookiePa = parseCookie({
    cookieString: response.headers.get('set-cookie') || '',
    domain: 'localhost:5173',
    projectId: CONSTANTS.API_CONSTANTS.PROJECT_ID,
    secure: false,
    samesite: 'strict'
   });


   const cookieValue = cookiePa[`${CONSTANTS.getCookieName()}`];
   cookies.set(`${CONSTANTS.getCookieName()}`, `${cookieValue}`, {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: "none",
        expires: new Date(cookiePa.expires),
        domain: 'localhost'
   });

   

   throw redirect(303, CONSTANTS.APP_PATHS.routes.backoffice);
}


export const actions: Actions = { login }