<script lang="ts">
	export let href: string;
	export let marginTop: number = 0;
</script>

<a {href} id="btn-secondary" style="margin-top: {marginTop}px">
	<slot />
</a>

<style>
	#btn-secondary {
		border-color: var(--secondary);
		border-width: 2px;
		border-style: solid;
		color: var(--onBg);
		text-decoration: none;
		font-size: var(--m);
		font-weight: normal;
		padding: 12px 32px;
		border-radius: 36px;
		transition: color background-color 0.3s ease;
	}

	#btn-secondary:hover {
		background-color: var(--secondary);
		color: var(--white);
	}
</style>
