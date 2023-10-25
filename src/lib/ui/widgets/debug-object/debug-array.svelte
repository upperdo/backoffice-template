<script lang="ts">
    // @ts-nocheck
    import DebugObjectItem from "./debug-object-item.svelte";
    export let items: any;
  </script>
  <div class="grid py-2 mx-6">
    <span class="text-gray-400">{"["}</span>
    {#each items as item (item)}
      <div class="grid mx-6">
        <span class="text-gray-400">{"{"}</span>
        <div class="grid mx-6">
          {#each Object.entries(item) as [key, value]}
              <DebugObjectItem key={key} value={value} />
          {/each}
        </div>
        <span class="text-gray-400">{"}"}</span>
      </div>
    {/each}
    <span class="text-gray-400">{"]"}</span>
  </div>