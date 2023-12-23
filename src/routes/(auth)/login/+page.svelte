<script lang="ts">
	import UserAuthForm from '$lib/features/authentication/widgets/user-auth-form.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let loading: boolean = false;

	const handleAuthUser: SubmitFunction = () => {
		loading = true;
		return async ({ update, result }) => {
			if ((result.type === 'redirect' && result.status === 303) || result.type === 'success') {
				return await goto('/account');
			}
			//loading = false;
			await update();
		};
	};
</script>

<div class="flex flex-col space-y-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">Login</h1>
	<p class="text-sm text-muted-foreground">Heading</p>
</div>
<UserAuthForm bind:loading {handleAuthUser} formAction="login" />
<p class="px-8 text-center text-sm text-muted-foreground">
	agreed
	<a href="/" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>{' '}
	and
	<a href="/" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
	.
</p>
