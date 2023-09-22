<script lang="ts">
export let ordered: boolean;
export let start: number;
</script>

{#if ordered}
	<ol class='list-decimal list-inside' {start}><slot></slot></ol>
{:else}
	<ul class='list-disc list-inside'><slot></slot></ul>
{/if}
