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
		align-items: center;
		gap: 16px;
	}

	/* Mobile styles (screens smaller than 600px) */
	@media (max-width: 600px) {
		#appbar {
			padding: 8px; /* Mobile padding */
		}
	}

	.spacer-w {
		flex-grow: 1;
	}
</style>
