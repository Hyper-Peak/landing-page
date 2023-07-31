<script lang="ts">
	export let name: string;
	export let logo: string;
	export let logoDark: string | null = null;
	export let url: string;

	import { ds } from '$lib/design-system';

	let logoSrc = logo;

	if (logoDark != null) {
		ds.subscribe((ds) => {
			logoSrc = ds.isLight ? logo : logoDark!;
		});
	}
</script>

<a href={url} target="_blank">
	<img src={logoSrc} alt={name} />
	<span>{name}</span>
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		text-decoration: none;
		align-items: center;
		gap: 8px;
	}

	span {
		font-size: var(--m);
	}

	a:hover {
		color: var(--secondary);
	}

	img {
		width: 20px;
		height: 20px;
	}
</style>
