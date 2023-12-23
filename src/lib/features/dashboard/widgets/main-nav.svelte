<script lang="ts">
	import { cn } from '$lib/app/utils';

	import { page } from '$app/stores';

	let className: string | undefined | null = undefined;
	export { className as class };

	$: currentRoute = $page.url.pathname;
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	<a
		href="/dashboard"
		class={`text-md font-medium  transition-colors hover:text-primary ${
			currentRoute === '/dashboard' ? '' : 'text-muted-foreground'
		}`}
	>
		Dashboard
	</a>

	<a
		href="/customers"
		class={`text-md font-medium  transition-colors hover:text-primary ${
			currentRoute === '/customers' ? '' : 'text-muted-foreground'
		}`}
	>
		Customers
	</a>
	<a
		href="/products"
		class={`text-md font-medium  transition-colors hover:text-primary ${
			currentRoute === '/products' ? '' : 'text-muted-foreground'
		}`}
	>
		Products
	</a>
	<a
		href="/sales"
		class={`text-md font-medium  transition-colors hover:text-primary ${
			currentRoute === '/sales' ? '' : 'text-muted-foreground'
		}`}
	>
		Sales
	</a>
</nav>
