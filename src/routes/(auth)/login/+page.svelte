<script lang="ts">
    import { LanguageStore } from "$lib/stores/locale";
    import UserAuthForm from "$lib/features/authentication/widgets/user-auth-form.svelte";
</script>

<div class="flex flex-col space-y-2 text-center">
    <h1 class="text-2xl font-semibold tracking-tight">
        {$LanguageStore.loginHeading}
    </h1>
    <p class="text-sm text-muted-foreground">
        {$LanguageStore.loginSubHeading}
    </p>
</div>
<UserAuthForm />
<p class="px-8 text-center text-sm text-muted-foreground">
    {$LanguageStore.formAgreedText}{" "}
    <a href="/" class="underline underline-offset-4 hover:text-primary">
        {$LanguageStore.termsOfService}
    </a>{" "}
    {$LanguageStore.andText}{" "}
    <a href="/" class="underline underline-offset-4 hover:text-primary">
        {$LanguageStore.privacyPolicy}
    </a>
    .
</p>