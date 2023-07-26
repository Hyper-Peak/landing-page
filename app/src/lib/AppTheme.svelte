<script lang="ts">
	import { ds, dsToCssVars } from '$lib/design-system';
	import NavBar from './navbar/NavBar.svelte';
	import { fontsUrl } from './typography';
</script>

<svelte:head>
	<link rel="stylesheet" href={fontsUrl} />
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

	@media (max-width: 600px) {
		#root {
			padding-left: 16px; 
			padding-right: 16px;
		}
	}

	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	:global(h1, h2, h3, h4, p, a, a:link, a:visited) {
		color: var(--onBg);
		transition: color 0.3s ease;
		margin: 0px;
		padding: 0px;
	}

	:global(h1, h2) {
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 700;
	}

	:global(p, h3, h4, a, a:link, a:visited) {
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
