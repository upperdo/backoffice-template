<script lang="ts">
	// Core
	import { browser } from '$app/environment';
	import { InitAccountStore } from '$lib/app/stores';
	import { localStorageUtil } from '$lib/app/utils';
	import { config } from '$lib/app/config';
	// Localization

	// Stores
	// Components

	// styles
	import '../app.postcss';

	// Variables

	const Storage = localStorageUtil();
	export let data;

	$: ({ locals, headers } = data);
	$: ({ accoundData } = locals);

	$: if (accoundData?.$id) {
		InitAccountStore(accoundData);
	}

	$: if (headers) {
		Storage.setStorage(config.appwrite.fallback, headers);
	}
</script>

{#if browser}
	<slot />
{/if}
