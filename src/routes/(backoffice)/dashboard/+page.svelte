<script lang="ts">
    import DashboardPage from "$lib/features/dashboard/widgets/dashboard-page.svelte";

    export let data;

    $:({ leads, files } = data);
</script>
<DashboardPage />