<script lang="ts">
	// Core
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import CONSTANTS from '$lib/common/constants';
	import { StorageUtility } from '$lib/common/local_storage/storage_utility';
	
	// Localization
	import Localization from '$lib/localization/localization_utility';
	
	// Stores
	import { InitLocaleStore, LocaleStore, LanguageStore } from '$lib/stores/locale';

	// styles
	import '../app.postcss';

	// Variables
	let userLocale:string;
	let loadingLanguage = true;

	// Functions
	InitLocaleStore(undefined, StorageUtility.getData, StorageUtility.saveData);

	onMount(() => {
		LocaleStore.subscribe(async (value) => {
			userLocale = value || CONSTANTS.CORE.defaultLocale;
			await Localization.loadLanguage(userLocale);
			LanguageStore.set(Localization.language);
			loadingLanguage = false;
		});
	})
</script>

{#if browser && !loadingLanguage}
	<slot />
{/if}