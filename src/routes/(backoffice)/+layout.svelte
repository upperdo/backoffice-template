<script lang="ts">
	// Core
	import CONSTANTS from '$lib/common/constants';
	import { AccountService } from '$lib/services';
	import { AccountStore, LogoutAccountStore } from '$lib/stores';
	
	// Localization
	import { LanguageSwitcher } from "$lib/ui/widgets";
	import { languageSwitcherFunc } from "$lib/common/utils/languageSwitcherFunc";
	
	// Stores
	import { LocaleStore } from '$lib/stores/locale';
	import { CheckIfUserIsLoggedIn } from '$lib/common/utils';

	// Variables

	// Functions
	const logout = async () => {
		await AccountService.deleteSession();
		LogoutAccountStore();
		CheckIfUserIsLoggedIn($AccountStore);
	}
</script>

{#if $AccountStore}
	<LanguageSwitcher {languageSwitcherFunc} languageList={CONSTANTS.CORE.languageList} bind:value={$LocaleStore} />
	<div class="border py-4">
		<button on:click={logout}>Logout</button>
	</div>

	<slot />
{/if}
