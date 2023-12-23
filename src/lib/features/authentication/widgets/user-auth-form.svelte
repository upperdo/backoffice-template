<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/app/ui/components/button/button.svelte';
	import Input from '$lib/app/ui/components/input/input.svelte';
	import Label from '$lib/app/ui/components/label/label.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { cn } from '$lib/app/utils';
	import { config } from '$lib/app/config';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let loading: boolean;
	export let formAction = 'login';

	const emailInputProp = {
		id: 'email',
		name: 'email',
		placeholder: 'name@example.com',
		type: 'email',
		autoCapitalize: 'none',
		autoComplete: 'email',
		autoCorrect: 'off',
		disabled: loading,
		required: true
	};

	const passwordInputProp = {
		id: 'password',
		name: 'password',
		placeholder: 'type your password',
		type: 'password',
		autoCapitalize: 'none',
		autoComplete: 'password',
		autoCorrect: 'off',
		disabled: loading,
		required: true
	};

	export let handleAuthUser: SubmitFunction;
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form action="/login?/{formAction}" method="POST" use:enhance={handleAuthUser}>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Email</Label>
				<Input {...emailInputProp} />
			</div>
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Password</Label>
				<Input {...passwordInputProp} />
			</div>
			<div class="flex justify-end items-center">
				<div class="mx-2" />
				<Button disabled={loading} type="submit" class="flex gap-2">
					{#if loading}
						{config.site.loadtext}
					{:else}
						Entrar
					{/if}
				</Button>
			</div>
		</div>
	</form>
</div>
