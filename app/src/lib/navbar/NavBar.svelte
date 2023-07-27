<script lang="ts">
	import HomeButton from './HomeButton.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div id="navbar">
	<HomeButton />
	<NavLink href="/services" />
	<NavLink href="/projects" />
	<NavLink href="/pricing" />

	<div class="spacer-w" />

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
		row-gap: 0px;
		padding-left: 32px;
		padding-right: 32px;
		justify-content: end;
	}

	/* Mobile styles (screens smaller than 600px) */
	@media (max-width: 600px) {
		#navbar {
			padding: 8px;
			gap: 12px;
			padding-left: 8px;
			padding-right: 8px;
		}
	}

	.spacer-w {
		flex-grow: 1;
	}
</style>
