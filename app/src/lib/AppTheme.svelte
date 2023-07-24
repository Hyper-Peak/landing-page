<script lang="ts">
	import { colorsToCSS, ds } from '$lib/theme';
	import NavBar from './NavBar.svelte';
</script>

<div id="root" class="fullscreen" style={colorsToCSS($ds.colors)}>
	<NavBar/>
	<div id="content">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		background-color: var(--bg);
        overscroll-behavior: none;
	}

	#root {
		width: 100vw;
		height: 100vh;
		padding: 32px;
		background-color: var(--bg);
		box-sizing: border-box;
		transition: background-color 0.3s ease;
	}

	#content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	:global(h1, h2, h3, h4, p) {
		color: var(--content);
		transition: color 0.3s ease;
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
