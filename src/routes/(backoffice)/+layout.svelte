<script lang="ts">
	// Core
	import CONSTANTS from '$lib/common/constants';
	import { AccountStore } from '$lib/stores';
	import { isRoleAllowedForRoute } from '$lib/common/utils';
	
	// Localization
	import { LanguageSwitcher } from "$lib/ui/widgets";
	import { languageSwitcherFunc } from "$lib/common/utils/languageSwitcherFunc";
	
	// Stores
	import { LocaleStore } from '$lib/stores/locale';
	import { page } from '$app/stores';

	// Components
	import {
		DashboardMainNav,
		Search,
		UserNav,
	} from "$lib/features/dashboard/widgets";
	import { UnAuthorize } from '$lib/ui/widgets';

	// Variables

	// Functions

</script>
<svelte:head>
	<title>Dashboard</title>
</svelte:head>
{#if $AccountStore}
	
		<div class="flex flex-col">
			<div class="border-b z-20">
				<div class="flex h-16 items-center px-4">
					<DashboardMainNav  class="mx-6" />
					<div class="ml-auto flex items-center space-x-4">
						<Search />
						<LanguageSwitcher {languageSwitcherFunc} languageList={CONSTANTS.CORE.languageList} bind:value={$LocaleStore} />
						<UserNav  />
					</div>
				</div>
			</div>
			<div class="flex-1 p-8">
				{#if isRoleAllowedForRoute($AccountStore.labels, $page.url.pathname)}
					<slot />
				{:else}
				 	<UnAuthorize />
				{/if}
			</div>
		</div>
	
{/if}
