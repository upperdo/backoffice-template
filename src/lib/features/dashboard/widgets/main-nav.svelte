<script lang="ts">
	// @ts-nocheck
	import { cn } from "$lib/common/utils";
	import { LanguageStore } from "$lib/stores/locale";

	import { page } from "$app/stores";

	let className: string | undefined | null = undefined;
	export { className as class };

	$: currentRoute = $page.url.pathname;
</script>
<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
	<a
		href="/dashboard"
		class={`text-md font-medium  transition-colors hover:text-primary ${currentRoute === '/dashboard'? '' : 'text-muted-foreground'}`}>
		{$LanguageStore.menu.dashboard}
	</a>

	<a href="/customers" class={`text-md font-medium  transition-colors hover:text-primary ${currentRoute === '/customers'? '' : 'text-muted-foreground'}`}>
		{$LanguageStore.menu.customers}
	</a>
	<a
		href="/products"
		class={`text-md font-medium  transition-colors hover:text-primary ${currentRoute === '/products'? '' : 'text-muted-foreground'}`}
	>
	{$LanguageStore.menu.products}
	</a>
	<a
		href="/sales"
		class={`text-md font-medium  transition-colors hover:text-primary ${currentRoute === '/sales'? '' : 'text-muted-foreground'}`}
	>
	{$LanguageStore.menu.sales}
	</a>
</nav>