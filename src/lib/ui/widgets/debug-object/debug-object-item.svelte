<script lang="ts">
    export let key: any;
    export let value: any;
</script>
  
  <div class="flex w-full flex-wrap overflow-x-auto">
    <span class="text-green-500">{key}:</span>
    <span class="text-yellow-500">{JSON.stringify(value)}</span>
  </div>