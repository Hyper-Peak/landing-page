<script lang="ts">
	export let marginTop: number = 0;
	export let gap: number = 12;
</script>

<div class="ctas-row" style="margin-top: {marginTop}px; gap: {gap}px;">
	<slot />
</div>

<style>
	.ctas-row {
		display: flex;
		flex-direction: row;
		gap: var(--gap);
		align-items: baseline;
		justify-content: center;
		flex-wrap: wrap;
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
