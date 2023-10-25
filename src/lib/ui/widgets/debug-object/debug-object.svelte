<script lang="ts">
    import CONSTANTS from "$lib/common/constants";
    import DebugObjectItem from "./debug-object-item.svelte";
    import DebugArray from "./debug-array.svelte"

    export let data: {[key: string]: any} = {};

    const isObjectEmpty = (obj: any) => Object.keys(obj).length === 0;
</script>

{#if CONSTANTS.CORE.debug && !isObjectEmpty(data)}
  <div class="bg-gray-700 text-white p-4 rounded-md my-4 w-full">
    <pre>
      {#each Object.entries(data) as [key, value] (key)}
          <div class="flex w-full flex-wrap overflow-x-auto">
            <span class="text-green-600">{key}:</span>
            {#if Array.isArray(value) && value.length > 0 && typeof value[0] === 'object'}
              <DebugArray items={value} />
            {:else}
              <DebugObjectItem key={key} value={value} />
            {/if}
          </div>
      {/each}
    </pre>
  </div>
{/if}