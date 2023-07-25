<script lang="ts">
	import { colorsToCSS, ds } from '$lib/theme';
	import NavBar from './navbar/NavBar.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Nunito+Sans:700|Roboto:400,400i,700&display=swap"
	/>
</svelte:head>

<div id="root" class="fullscreen" style={colorsToCSS($ds.colors)}>
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


	:global(.xxl) {
		font-size: 64px;
	}

	:global(.xxl) {
		font-size: 48px;
	}

	:global(.xl) {
		font-size: 32px;
	}

	:global(.l) {
		font-size: 24px;
	}

	:global(.m) {
		font-size: 20px;
	}

	:global(.s) {
		font-size: 16px;
	}

	:global(.xs) {
		font-size: 12px;
	}

	:global(.xxs) {
		font-size: 10px;
	}
</style>
