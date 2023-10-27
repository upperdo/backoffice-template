<script lang="ts">
    // @ts-nocheck
    import { LanguageStore } from "$lib/stores/locale";
</script>
<div class="flex -z-40 flex-col w-full h-screen items-center justify-center gap-1 mt-[-10rem]">
    <h1 class="text-5xl py-4">{$LanguageStore.unauthorize.title}</h1>
    {@html $LanguageStore.unauthorize.paragraph}
</div>