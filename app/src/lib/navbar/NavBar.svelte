<script lang="ts">
	import Spacer from '$lib/components/Spacer.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div id="appbar">
	<NavLink href="/" label="Home" />
	<NavLink href="/services" />
	<NavLink href="/portfolio" />
	<NavLink href="/pricing" />

	<Spacer />

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
