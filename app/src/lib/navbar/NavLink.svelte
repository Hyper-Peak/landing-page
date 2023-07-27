<script lang="ts">
	export let href = '';
	export let label = uppercaseFirst(href);

	import { page } from '$app/stores';
	import { ds } from '$lib/design-system';

	let color = $page.url.pathname == href ? $ds.colors.secondary : $ds.colors.onBg;
	$: style = `--color: ${color};`;

	ds.subscribe((ds) => {
		color = $page.url.pathname == href ? ds.colors.secondary : ds.colors.onBg;
	});
	page.subscribe((page) => {
		color = page.url.pathname == href ? $ds.colors.secondary : $ds.colors.onBg;
	});

	function uppercaseFirst(str: string): string {
		return str.charAt(1).toUpperCase() + str.slice(2);
	}
</script>

{#if $page.url.pathname == href}
	<b><a id="navlink" {href} {style}>{label}</a></b>
{:else}
	<a id="navlink" {href} {style}>{label}</a>
{/if}

<style>
	#navlink {
		font-size: var(--s);
		color: var(--color);
		text-decoration: none;
		padding: 12px 0px;
	}

	#navlink:hover {
		color: var(--secondary);
	}
</style>
