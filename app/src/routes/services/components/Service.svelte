<script lang="ts">
    export let name: string
    export let logo: string;
	export let logoDark: string | null = null;

	import { ds } from '$lib/design-system';

	let logoSrc = logo;

	if (logoDark != null) {
		ds.subscribe((ds) => {
			logoSrc = ds.isLight ? logo : logoDark!;
		});
	}
</script>

<div id="service">
    <h2>{name}</h2>
    <h4>Technologies</h4>
    <slot id="tech"/>
</div>

<style>
    #service {
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: var(--l);
    }

    h4 {
        font-size: var(--m);
        font-weight: bold;
    }

    #tech {

    }
</style>