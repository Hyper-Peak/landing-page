<script lang="ts">
	export let marginTop: number = 0;
	export let href: string;
	export let label: string;
</script>

<a {href} id="btn-secondary" style="margin-top: {marginTop}px">{label}</a>

<style>
	#btn-secondary {
		display: inline-block;
		border-color: var(--secondary);
		border-width: 2px;
		border-style: solid;
		color: var(--onBg);
		text-decoration: none;
		font-size: var(--l);
		font-weight: normal;
		padding: 12px 32px;
		border-radius: 32px;
		transition: color background-color 0.3s ease;
	}

	#btn-secondary:hover {
		background-color: var(--secondary);
		color: var(--white);
	}
</style>
