<script lang="ts">
	export let marginTop: number = 0;
</script>

<div class="ctas-row" style="margin-top: {marginTop}px">
	<slot />
</div>

<style>
	.ctas-row {
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: baseline;
		justify-content: center;
		flex-wrap: wrap;
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
