<script lang="ts">
    import type { SEO } from "$lib/common/constants/types";
    export let seoConfig: SEO;
</script>
<svelte:head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description}/>
        <meta name="company" content={seoConfig.company} />
        <meta name="msapplication-TileColor" content="#006bad">
        <meta name="theme-color" content="#ffffff">
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>

        {#if seoConfig.apple_touch_icon}
            <link rel="apple-touch-icon" sizes="180x180" href={seoConfig.apple_touch_icon}>
        {/if}
        {#if seoConfig.favicon[32]}
            <link rel="icon" type="image/png" sizes="32x32" href={seoConfig.favicon[32]}>
        {/if}
        {#if seoConfig.favicon[16]}
            <link rel="icon" type="image/png" sizes="16x16" href={seoConfig.favicon[16]}>
        {/if}
        {#if seoConfig.manifest}
            <link rel="manifest" href={seoConfig.manifest}>
        {/if}
        {#if seoConfig.maskIcon}
            <link rel="mask-icon" href={seoConfig.maskIcon} color="#006bad">
        {/if}
        
        {#if seoConfig.canonical}
            <link rel="canonical" href={seoConfig.canonical}/>
        {/if}
        {#if seoConfig.og}
            <meta property="og:locale" content={seoConfig.og.locale}/>
            <meta property="og:type" content={seoConfig.og.type}/>
            <meta property="og:title" content={seoConfig.title}/>
            <meta property="og:url" content={seoConfig.og.url}/>
            <meta property="og:description" content={seoConfig.og.description}/>
            <meta property="og:site_name" content={seoConfig.og.site_name}/>
            <meta property="og:image" content={seoConfig.og.image}/>
            <meta property="og:image:width" content={seoConfig.og.image_w}/>
            <meta property="og:image:height" content={seoConfig.og.image_h}/>
            <meta property="og:image:type" content={seoConfig.og.image_type}/>
            <meta property="article:modified_time" content={seoConfig.og.modified_time}/>
        {/if}
        {#if seoConfig.twitter}
            <meta name="twitter:card" content={seoConfig.twitter.card}/>
        {/if}
</svelte:head>