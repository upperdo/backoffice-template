<script lang="ts">
	import type { LanguageListData } from "$lib/common/constants/types";

    /**
     * @type {label:string value:string} list with available languages
     * @param {string} value language code
     * @param {function} languageSwitcherFunc function to switch the current app language
     * @description Language switcher component
    */
    export let languageList: LanguageListData[] = [];
    export let value:string;
    export let languageSwitcherFunc: Function;
</script>

<select bind:value on:change={() => languageSwitcherFunc(value)}>
    {#each languageList as language}
        <option value={language.value}>{language.label}</option>
    {/each}
</select>