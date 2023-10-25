<script lang="ts">
    import { fade } from "svelte/transition";
    import { DebugStore } from "./store/DebugStore";
    import Arrow from "./icons/arrow.svelte";
    import ChevronDown from "./icons/chevron-down.svelte";
    import Clock from "./icons/clock.svelte";
    import Cog from "./icons/cog.svelte";
    import DebugObject from "../debug-object/debug-object.svelte";
    import { page } from "$app/stores";
	import ChevronUp from "./icons/chevron-up.svelte";
    import DebugLogs from "../debug-object/debug-logs.svelte";

    let showDebugWindow = false;

    let tabId = '';
    let selectedData: any = 'Please choose a tab to show relevant information.';

    //$: console.log("DebutStore", $DebugStore);

    function toggleDebugWindow(){
        showDebugWindow = !showDebugWindow;
    }

    function switchSelectedData(id: any){
        switch(id){
            case 'form':
                selectedData = $page.form || {};
            break;
            case 'logs':
                selectedData = $DebugStore.logs
                break;
            case 'url':
                selectedData = {
                    hash: $page.url.hash,
                    host: $page.url.host,
                    hostName: $page.url.hostname,
                    search: $page.url.search,
                    origin: $page.url.origin,
                    pathname: $page.url.pathname,
                    port: $page.url.port
                }
            break;
            case 'data':
                selectedData = $page.data
            break;
            default:
                selectedData = $page
        }
    }

    function changeTab(id:string): void {
        switchSelectedData(id);
        tabId = id;
        showDebugWindow = true;
    }
</script>
<div class="fixed z-50 bottom-0 w-full border-t-4 border-red-500 shadow-lg  bg-gray-50">
    <div class="flex w-full justify-between p-4">
        <div class="flex items-center">
            <button on:click={toggleDebugWindow} class="border-r-2  text-red-500 font-light text-md px-2">UpperDbug</button>
            <button on:click={() => changeTab('logs')} type="button" class="border-r-2 px-2 text-gray-500 flex gap-2 items-center">
                Logs
                {#if $DebugStore.logs.length > 0}
                    <div class="flex gap-2">
                        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                        <div class="mt-px">{$DebugStore.logs.length}</div>
                        </div>
                    
                    </div>
                {/if}
            </button>
            <button on:click={() => changeTab('url')} type="button" class="border-r-2 px-2 text-gray-500">Url</button>
            <button on:click={() => changeTab('form')} type="button" class="border-r-2 px-2  text-gray-500 items-center flex gap-2">Form 
                {#if $page.form}
                    <div class="flex gap-2">
                        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                        <div class="mt-px">1</div>
                        </div>
                    
                    </div>
                {/if}
            </button>
            <button on:click={() => changeTab('data')} type="button" class="border-r-2 px-2 text-gray-500">Data</button>
            <button on:click={() => changeTab('request')} type="button" class="px-2 text-gray-500">Request</button>
        </div>

        <div class="flex items-center">
            <div class="border-r-2 px-2">
                <div class="flex gap-2 items-center">
                    <Arrow class="w-5 h-5 text-gray-500"/>
                    <span class="text-gray-500">GET {$page.route.id}</span>
                    <span>
                        <div class="flex gap-2">
                            <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                              <div class="mt-px">{$page.status}</div>
                            </div>
                          
                          </div>
                    </span>
                </div>
            </div>
            <div class="border-r-2 px-2">
                <div class="flex gap-2 items-center">
                    <Cog class="w-5 h-5 text-gray-500"/>
                    <span class="text-gray-500">{$DebugStore.vitals.memoryUsage}MB</span>
                </div>
            </div>
            <div class="border-r-2 px-2">
                <div class="flex gap-2 items-center">
                    <Clock class="w-5 h-5 text-gray-500"/>
                    <span class="text-gray-500">{$DebugStore.vitals.executionTime} ms</span>
                </div>
            </div>
            <button type="button" on:click={toggleDebugWindow} class="px-2">
                {#if showDebugWindow}
                    <ChevronDown class="w-5 h-5 text-gray-500" />
                {:else}
                    <ChevronUp class="w-5 h-5 text-gray-500" />
                {/if}
            </button>
        </div>
    </div>
    {#if showDebugWindow}
        <div in:fade out:fade class="flex w-full bg-white min-h-[4rem] p-4 items-center">
            {#if tabId === 'logs'}
                <DebugLogs logs={selectedData} />
            {:else}
                <DebugObject data={{info:[selectedData]}} />
            {/if}
        </div>
    {/if}
</div>