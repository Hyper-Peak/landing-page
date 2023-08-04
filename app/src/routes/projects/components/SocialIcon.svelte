<script lang="ts">
	import { ds } from '$lib/design-system';

	export let href: string;
	export let alt: string;
	export let icon: string;
	export let iconDark: string = icon;
	export let iconHovered: string;

	let src = icon;

	function onHover() {
		src = iconHovered;
	}

	function onHoverEnd() {
		src = $ds.isLight ? icon : iconDark;
	}

	ds.subscribe((ds) => {
		src = ds.isLight ? icon : iconDark;
	});
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a {href} target="_blank" on:mouseover={onHover} on:mouseout={onHoverEnd} on:mousedown={onHoverEnd}>
	<img id="icon" {src} {alt} class="social-icon" />
</a>

<style>
	#icon {
		width: 24px;
		height: 24px;
	}
</style>
