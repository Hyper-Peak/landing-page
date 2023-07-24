<script lang="ts">
	import HomeButton from './HomeButton.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname;
</script>

<div id="appbar">
	{#if currentPage !== '/'}
		<HomeButton />
	{/if}
	{#if currentPage !== '/services' && currentPage !== '/'}
		<a href="/services">Services</a>
	{/if}
	{#if currentPage !== '/portfolio'}
		<a href="/portfolio">Portfolio</a>
	{/if}
	{#if currentPage !== '/workflow'}
		<a href="/workflow">Workflow</a>
	{/if}
	{#if currentPage !== '/pricing'}
		<a href="/pricing">Pricing</a>
	{/if}
	{#if currentPage !== '/contact'}
		<a href="/contact">Contact</a>
	{/if}
	{#if currentPage !== '/blog'}
		<a href="/blog" style="margin-left: auto;">Blog</a>
	{/if}
	{#if currentPage === '/blog'}
		<div class="weight-left">
			<ThemeToggle />
		</div>
	{:else}
		<ThemeToggle />
	{/if}
</div>

<style>
	#appbar {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}

	.weight-left {
		margin-left: auto;
	}
</style>
