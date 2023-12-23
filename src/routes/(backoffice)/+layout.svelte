<script lang="ts">
	// Core
	import { AccountStore } from '$lib/app/stores';

	// Localization

	// Components
	import { DashboardMainNav, Search, UserNav } from '$lib/features/dashboard/widgets';

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
				<DashboardMainNav class="mx-6" />
				<div class="ml-auto flex items-center space-x-4">
					<Search />
					<UserNav />
				</div>
			</div>
		</div>
		<div class="flex-1 p-8">
			<slot />
		</div>
	</div>
{/if}
