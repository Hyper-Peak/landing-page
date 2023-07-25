<script lang="ts">
	export let weight: number = 1;
</script>

<div class="spacer-w" style="--weight:{weight};" />

<style>
	.spacer-w {
		flex-grow: var(--weight);
	}
</style>
