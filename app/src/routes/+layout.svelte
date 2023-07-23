<script lang="ts">
	import { dsStyles, ds } from '$lib/theme';
</script>

<div id="bg" style={$dsStyles}>
	<slot />
</div>

<style>
	#bg {
		background-color: var(--bg);
	}

	h1,
	h2,
	h3,
	h4,
	p {
		color: var(--content);
	}
</style>
