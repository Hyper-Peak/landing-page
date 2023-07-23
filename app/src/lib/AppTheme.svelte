<script lang="ts">
	import { page } from '$app/stores';
	import { colorsToCSS, ds } from '$lib/theme';
	import HomeButton from './HomeButton.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div id="root" class="fullscreen" style={colorsToCSS($ds.colors)}>
	<div id="appbar">
		{#if $page.url.pathname !== '/'}
			<HomeButton />
		{/if}
		<div style="margin-left: auto;">
			<ThemeToggle />
		</div>
	</div>
	<div id="content">
		<slot />
	</div>
</div>

<style>
	#root {
		width: 100vw;
		height: 100vh;
		padding: 32px;
		background-color: var(--bg);
		box-sizing: border-box;
	}

	#appbar {
		display: flex;
		flex-direction: row;
	}

	#content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
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
