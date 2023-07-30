<script lang="ts">
	import { ds, dsToCssVars } from '$lib/design-system';
	import PageTransition from './PageTransition.svelte';
	import NavBar from './navbar/NavBar.svelte';
	import { fontsUrl } from './typography';
</script>

<svelte:head>
	<link rel="stylesheet" href={fontsUrl} />
</svelte:head>

<div id="root" style={dsToCssVars($ds)}>
	<div id="navbar">
		<NavBar />
	</div>
	<PageTransition>
		<slot />
	</PageTransition>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	#root {
		min-width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		background-color: var(--bg);
		box-sizing: border-box;
		transition: background-color 0.3s ease-in;
	}

	#navbar {
		padding-top: 8px;
	}

	:global(h1, h2, h3, h4, h5, h6, p, a, a:link, a:visited, li) {
		color: var(--onBg);
		transition: color 0.3s ease;
		margin: 0px;
		padding: 0px;
	}

	:global(h1, h2) {
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 700;
	}

	:global(p, h3, h4, h5, h6, a, a:link, a:visited, li) {
		font-family: 'Roboto', sans-serif;
	}

	:global(.xxxl) {
		font-size: var(--xxxl);
	}

	:global(.xxl) {
		font-size: var(--xxl);
	}

	:global(.xl) {
		font-size: var(--xl);
	}

	:global(.l) {
		font-size: var(--l);
	}

	:global(.m) {
		font-size: var(--m);
	}

	:global(.s) {
		font-size: var(--s);
	}

	:global(.xs) {
		font-size: var(--xs);
	}

	:global(.xxs) {
		font-size: var(--xxs);
	}

	:global(.mt4) {
		margin-top: 4px !important;
	}

	:global(.mt8) {
		margin-top: 8px !important;
	}

	:global(.mt12) {
		margin-top: 12px !important;
	}

	:global(.mt16) {
		margin-top: 16px !important;
	}

	:global(.mt20) {
		margin-top: 20px !important;
	}

	:global(.mt24) {
		margin-top: 24px !important;
	}

	:global(.mt28) {
		margin-top: 28px !important;
	}

	:global(.mt32) {
		margin-top: 32px !important;
	}

	:global(.mt36) {
		margin-top: 36px !important;
	}

	:global(.mt40) {
		margin-top: 40px !important;
	}

	:global(.mt44) {
		margin-top: 44px !important;
	}

	:global(.mt48) {
		margin-top: 48px !important;
	}

	:global(.mt56) {
		margin-top: 56px !important;
	}

	:global(.mt64) {
		margin-top: 64px !important;
	}
</style>
