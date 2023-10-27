<script lang="ts">
    import DashboardPage from "$lib/features/dashboard/widgets/dashboard-page.svelte";
	import type { CreateExecutionParams } from "$lib/services/functions.js";
	import { FunctionService } from "$lib/services/index.js";

    export let data;

        // type UserActionControlData = {
        //     status: string
        //     APPWRITE_FUNCTION_API_KEY: string
        //     APPWRITE_FUNCTION_ENDPOINT: string
        //     body: string
        // }

    // async function getExecution(id?: string) {
    //     const config: CreateExecutionParams = {
    //         functionId: 'userActionControl',
    //         parse: true,
    //     }
       
    //     return await fetchExecutionData<UserActionControlData>(config);
    // }

    // async function fetchExecutionData<T>(config: CreateExecutionParams){
    //     return await FunctionService.createExecution<T>(config);
    // }


</script>

<!-- {#await getExecution()}
    Loading data;
{:then data} 

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
    
{/await} -->
<DashboardPage />