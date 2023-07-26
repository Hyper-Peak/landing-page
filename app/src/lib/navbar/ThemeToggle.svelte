<script lang="ts">
	import Moon from '$lib/assets/moon.svg';
	import Sun from '$lib/assets/sun.svg';
	import { Theme, ds, prefersDarkTheme, setTheme } from '$lib/design-system';
	import { onMount } from 'svelte';

	function toggleTheme() {
		setTheme($ds.isLight ? Theme.Dark : Theme.Light);
	}

	onMount(() => {
		if (prefersDarkTheme()) {
			setTheme(Theme.Dark);
		}
	});
</script>

<button id="toggle" on:click={toggleTheme}>
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

	img {
		padding: 0px;
		width: 22px;
		height: 22px;
		image-rendering: optimizeSpeed;
	}
</style>
