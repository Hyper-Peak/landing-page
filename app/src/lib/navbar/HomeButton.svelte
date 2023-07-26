<script lang="ts">
	import { page } from '$app/stores';
	import LogoHovered from '$lib/assets/hyperpeak-logo-hovered.svg';
	import Logo from '$lib/assets/hyperpeak-logo.svg';

	let src = Logo;

	function onHover() {
		src = LogoHovered;
	}

	function onHoverEnd() {
		src = Logo;
	}
</script>

{#if $page.url.pathname != '/'}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<a href="/" id="btn" on:mouseover={onHover} on:mouseout={onHoverEnd} on:mousedown={onHoverEnd}>
		<img {src} alt="HyperPeak" />
	</a>
{/if}

<style>
	#btn {
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
		width: 32px;
		height: 32px;
		image-rendering: optimizeSpeed;
	}
</style>
