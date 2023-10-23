<script lang="ts">
	// Core
	import CONSTANTS from '$lib/common/constants';
	
	// Localization
	import { LanguageSwitcher } from "$lib/ui/widgets";
	import { languageSwitcherFunc } from "$lib/common/utils/languageSwitcherFunc";
	
	// Stores
	import { LocaleStore } from '$lib/stores/locale';

	// Variables

	// Functions

</script>

<LanguageSwitcher {languageSwitcherFunc} languageList={CONSTANTS.CORE.languageList} bind:value={$LocaleStore} />

<slot />