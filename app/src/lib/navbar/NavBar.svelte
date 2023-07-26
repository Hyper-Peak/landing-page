<script lang="ts">
	import Spacer from '$lib/components/Spacer.svelte';
	import HomeButton from './HomeButton.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div id="navbar">
	<HomeButton />
	<NavLink href="/services" />
	<NavLink href="/projects" />
	<NavLink href="/pricing" />

	<Spacer />

	<NavLink href="/contact" />
	<NavLink href="/blog" />
	<ThemeToggle />
</div>

<style>
	#navbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		row-gap: 16px;
		justify-content: center;
	}

	/* Mobile styles (screens smaller than 600px) */
	@media (max-width: 600px) {
		#navbar {
			padding: 8px; /* Mobile padding */
		}
	}
</style>
