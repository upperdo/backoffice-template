import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { accountFormSchema } from "$lib/features/settings/widgets/forms/account-form.svelte";
import { fail, type Actions } from "@sveltejs/kit";
import CONSTANTS from "$lib/common/constants";
import SSRAppwriteClient from "$lib/platforms/appwrite/SSRAppwriteClient";

export const load: PageServerLoad = async () => {

	return {
		form: superValidate(accountFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, accountFormSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}else{
			const jwtToken = event.cookies.get(CONSTANTS.CORE.cookieName);
			if(jwtToken){
				const ssrClient = SSRAppwriteClient.getInstance(jwtToken);
				const response = await ssrClient.account.updateName(form.data.name);
				console.log("response", response);
			}

		}
		return {
			form
		};
	}
};