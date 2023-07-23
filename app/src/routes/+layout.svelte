<script lang="ts">
	import { colorsToCSS, ds } from '$lib/theme';

	let cssVars = colorsToCSS($ds.colors);

	ds.subscribe((ds) => {
		cssVars = colorsToCSS(ds.colors);
	});
</script>

<div id="root" class="fullscreen" style={cssVars}>
	<slot />
</div>

<style>
	:global(#root) {
		width: 100vw;
		height: 100vh;
		background-color: var(--bg);
	}

	:global(h1, h2, h3, h4, p) {
		color: var(--content);
	}

	.fullscreen {
		position: absolute; /* or fixed */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
