<script lang="ts">
	import { page } from '$app/stores';
	import LogoDark from '$lib/assets/hyperpeak-logo-dark.svg';
	import LogoHovered from '$lib/assets/hyperpeak-logo-hovered.svg';
	import LogoLight from '$lib/assets/hyperpeak-logo-light.svg';
	import { ds } from '$lib/design-system';

	let src = $ds.isLight ? LogoLight : LogoDark;

	function onHover() {
		src = LogoHovered;
	}

	function onHoverEnd() {
		src = $ds.isLight ? LogoLight : LogoDark;
	}

	ds.subscribe((ds) => {
		src = ds.isLight ? LogoLight : LogoDark;
	});
</script>

{#if $page.url.pathname != '/'}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<a href="/" on:mouseover={onHover} on:mouseout={onHoverEnd} on:mousedown={onHoverEnd}>
		<img {src} alt="HyperPeak" />
	</a>
{/if}

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		width: 32px;
		height: 32px;
	}

	img {
		padding: 0px;
		width: 24px;
		height: 24px;
		image-rendering: optimizeSpeed;
	}
</style>
