<script lang="ts">
	export let name: string;
	export let logo: string | null = null;
	export let logoDark: string | null = null;
	export let hasTeckstack: boolean = true;

	import { ds } from '$lib/design-system';

	let logoSrc = logo;

	if (logoDark != null) {
		ds.subscribe((ds) => {
			logoSrc = ds.isLight ? logo : logoDark;
		});
	}
</script>

<div id="service">
	<div id="header">
		{#if logoSrc != null}
			<img src={logoSrc} alt={name} class="logo" />
		{/if}
		<h2>{name}</h2>
	</div>
	{#if hasTeckstack}
		<h4>Tech stack</h4>
	{/if}
	<slot />
</div>

<style>
	#service {
		display: flex;
		flex-direction: column;
	}

	#header {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

	.logo {
		width: 24px;
		height: 24px;
	}

	h2 {
		font-size: var(--l);
	}

	h4 {
		font-size: var(--s);
		font-weight: bold;
	}
</style>
