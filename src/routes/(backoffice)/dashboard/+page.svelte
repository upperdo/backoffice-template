<script lang="ts">
	import DashboardPage from '$lib/features/dashboard/widgets/dashboard-page.svelte';

	export let data;
</script>

<!-- {#await getExecution()}
    Loading data;
{:then data} 

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
    
{/await} -->
<DashboardPage />
