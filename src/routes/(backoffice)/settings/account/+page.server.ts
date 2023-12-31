import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { accountFormSchema } from "$lib/features/settings/widgets/forms/account-form.svelte";
import { fail, type Actions } from "@sveltejs/kit";

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
		} else {

		}
		return {
			form
		};
	}
};