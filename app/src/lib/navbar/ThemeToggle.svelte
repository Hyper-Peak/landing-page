<script lang="ts">
	import Moon from '$lib/assets/moon.svg';
	import Sun from '$lib/assets/sun.svg';
	import { globalColors, PRIMARY_DARK } from '$lib/colors';
	import { ds, prefersDarkTheme, setTheme, Theme } from '$lib/design-system';
	import { onMount } from 'svelte';

	let hoverColor = globalColors.orange;

	onMount(() => {
		if (prefersDarkTheme()) {
			setTheme(Theme.Dark);
			hoverColor = PRIMARY_DARK;
		}
	});

	function toggleTheme() {
		setTheme($ds.isLight ? Theme.Dark : Theme.Light);
	}

	ds.subscribe((ds) => {
		hoverColor = ds.isLight ? globalColors.orange : PRIMARY_DARK;
	});

	$: style = `--hoverColor: ${hoverColor};`;
</script>

<button id="toggle" on:click={toggleTheme} {style}>
	{#if $ds.isLight}
		<img src={Sun} alt="Sun" />
	{:else}
		<img src={Moon} alt="Moon" />
	{/if}
</button>

<style>
	#toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		width: 32px;
		height: 32px;
		border: 2px solid;
		border-color: var(--onBg);
		border-radius: 50%;
	}

	#toggle:hover {
		background-color: var(--hoverColor) !important;
	}

	img {
		padding: 0px;
		width: 22px;
		height: 22px;
		image-rendering: optimizeSpeed;
	}
</style>
