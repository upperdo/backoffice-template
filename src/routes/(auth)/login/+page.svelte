<script lang="ts">
    import { LanguageStore } from "$lib/stores/locale";
    import UserAuthForm from "$lib/features/authentication/widgets/user-auth-form.svelte";
</script>

<div class="flex flex-col space-y-2 text-center">
    <h1 class="text-2xl font-semibold tracking-tight">
        Login to your account
    </h1>
    <p class="text-sm text-muted-foreground">
        Enter your email and password below to login in your account
    </p>
</div>
<UserAuthForm />
<p class="px-8 text-center text-sm text-muted-foreground">
    By clicking continue, you agree to our{" "}
    <a href="/" class="underline underline-offset-4 hover:text-primary">
        Terms of Service
    </a>{" "}
    and{" "}
    <a href="/" class="underline underline-offset-4 hover:text-primary">
        Privacy Policy
    </a>
    .
</p>