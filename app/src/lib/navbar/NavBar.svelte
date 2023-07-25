<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	$: currentPage = $page.url.pathname;
</script>

<div id="appbar">
	<NavLink href="/" label="Home" />
	<NavLink href="/services" />
	<NavLink href="/portfolio" />
	<NavLink href="/pricing" />

	<div class="spacer-w" />

	<NavLink href="/contact" />
	<NavLink href="/blog" />
	<ThemeToggle />
</div>

<style>
	#appbar {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}

	.spacer-w {
		flex-grow: 1;
	}
</style>
