<script lang="ts">
    import { DebugObject } from "$lib/ui/widgets"
    import DashboardPage from "$lib/features/dashboard/widgets/dashboard-page.svelte";

    export let data;

    $:({ leads } = data);
</script>

<DashboardPage />