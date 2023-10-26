<script lang="ts">
	import { InitAccountStore, AccountStore } from "$lib/stores";
	import { AccountService } from "$lib/services";
	import { LanguageStore } from "$lib/stores/locale";
	import { Icons } from "$lib/ui/components/icons";
	import { Button } from "$lib/ui/components/button";
	import { Input } from "$lib/ui/components/input";
	import { Label } from "$lib/ui/components/label";
	import { cn } from "$lib/common/utils/";
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";

	let className: string | undefined | null = undefined;
	export { className as class };

	export let loading = false;
	
	export let form: any ;
	export let onSubmit: SubmitFunction;
</script>

<div class={cn("grid gap-6", className)} {...$$restProps}>
	<form method="POST" action="?/login" use:enhance={onSubmit}>
		<div class="grid gap-2">
			{#if form?.credentials}
				<div class="text-red-500 w-full text-center font-semibold text-sm">
					Please check your email and password.
				</div>
			{/if}
			<div class="grid gap-2">
				<Label class="text-gray-500" for="email">{$LanguageStore.emailInputLabel}</Label>
				<Input
					id="email"
					name="email"
					placeholder={$LanguageStore.emailInputPlaceHolderText}
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={loading}
				/>
				<div></div>
				<Label class="text-gray-500" for="password">{$LanguageStore.passwordInputLabel}</Label>
				<Input
					id="password"
					name="password"
					placeholder={$LanguageStore.passwordInputPlaceHolderText}
					type="password"
					autocapitalize="none"
					autocomplete="off"
					autocorrect="off"
					disabled={loading}
				/>
			</div>
			<Button disabled={loading}>
				{#if loading}
					<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Login
			</Button>
		</div>
	</form>
	<!-- <div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground">
				Or continue with
			</span>
		</div>
	</div> -->
	<!-- <Button variant="outline" type="button" disabled={isLoading}>
		{#if isLoading}
			<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
		{:else}
			<Icons.gitHub class="mr-2 h-4 w-4" />
		{/if}
		{" "}
		Github
	</Button> -->
</div>