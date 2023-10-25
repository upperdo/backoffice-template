<script lang="ts">
    export let logs: {type: string, message: string}[];

    function applyColor(type:string){
        let color = {
            bg: 'bg-info',
            text: 'text-info'
        }
        switch(type){
            case 'info':
                color = {
                    bg: 'bg-info',
                    text: 'text-info'
                }
            break
            case 'warning':
                color = {
                    bg: 'bg-warning',
                    text: 'text-warning'
                }
            break;
            case 'debug':
                color = {
                    bg: 'bg-debug',
                    text: 'text-debug'
                }
            break;
            case 'error':
                color = {
                    bg: 'bg-error',
                    text: 'text-error'
                }
            break;
            default:
                color = {
                    bg: 'bg-info',
                    text: 'text-info'
                }
        }
        return color;
    }
</script>
<style>
    .bg-info{
        @apply bg-blue-200 border-blue-300;
    }
    .bg-warning{
        @apply bg-yellow-200 border-yellow-300;
    }
    .bg-debug{
        @apply bg-orange-200 border-orange-300;
    }
    .bg-error{
        @apply bg-red-200 border-red-300;
    }

    .text-info{
        @apply text-blue-500;
    }
    .text-warning{
        @apply text-yellow-500;
    }
    .text-debug{
        @apply text-orange-500;
    }
    .text-error{
        @apply text-red-500;
    }
</style>

<div class="flex gap-4 flex-col w-full p-4 bg-gray-50 text-gray-700 rounded-lg">
    {#each logs as log}
        <div class={`flex gap-2 rounded-lg p-2 border w-full items-center ${applyColor(log.type).bg}`}>
            <span class={`${applyColor(log.type).text} uppercase `}>{log.type} :</span>
            <span class={`${applyColor(log.type).text} w-5/6 overflow-x-auto`}>
                <pre>
                    {JSON.stringify(log.message, null, 2)}
                </pre>
            </span>
        </div>
    {/each}
</div>