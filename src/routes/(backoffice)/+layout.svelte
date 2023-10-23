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

	// Components
	import {
		DashboardMainNav,
		Search,
		UserNav
	} from "$lib/features/dashboard/widgets";

	// Variables

	// Functions
	const logout = async () => {
		await AccountService.deleteSession();
		LogoutAccountStore();
		CheckIfUserIsLoggedIn($AccountStore);
	}
</script>
<svelte:head>
	<title>Dashboard</title>
</svelte:head>
{#if $AccountStore}
	<div class="hidden flex-col md:flex">
		<div class="border-b">
			<div class="flex h-16 items-center px-4">
				<DashboardMainNav class="mx-6" />
				<div class="ml-auto flex items-center space-x-4">
					<Search />
					<LanguageSwitcher {languageSwitcherFunc} languageList={CONSTANTS.CORE.languageList} bind:value={$LocaleStore} />
					<UserNav {logout} />
				</div>
			</div>
		</div>
		<div class="flex-1 space-y-4 p-8 pt-6">
				<slot />
		</div>
	</div>
{/if}
