<script lang="ts">
	import { Theme, ds, prefersDarkTheme, setTheme } from '$lib/theme';
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

<button on:click={toggleTheme}>
	{$ds.isLight ? 'Go Dark' : 'Go Light'}
</button>
