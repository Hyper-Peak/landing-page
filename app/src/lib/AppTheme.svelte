<script lang="ts">
	import { ds, dsToCssVars } from '$lib/design-system';
	import NavBar from './navbar/NavBar.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Nunito+Sans:700|Roboto:400,400i,700&display=swap"
	/>
</svelte:head>

<div id="root" class="fullscreen" style={dsToCssVars($ds)}>
	<div id="navbar">
		<NavBar />
	</div>
	<div id="content">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		background-color: var(--bg);
		/* overscroll-behavior: none; */
	}

	#root {
		width: 100vw;
		height: 100vh;
		padding-top: 24px;
		padding-left: 32px;
		padding-right: 32px;
		padding-bottom: 32px;
		background-color: var(--bg);
		box-sizing: border-box;
		transition: background-color 0.3s ease;
	}

	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	:global(h1, h2, h3, h4, p, a:link, a:visited) {
		color: var(--onBg);
		transition: color 0.3s ease;
		margin: 0px;
	}

	:global(h1, h2) {
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 700;
	}

	:global(p) {
		font-family: 'Robotto', sans-serif;
	}

	.fullscreen {
		position: absolute; /* or fixed */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
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

	:global(btn-primary) {
		background-color: var(--primary);
		color: var(--onPrimary);
		font-size: var(--m);
	}
</style>
