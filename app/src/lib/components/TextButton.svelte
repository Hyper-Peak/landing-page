<script lang="ts">
	export let marginTop: number = 0;
	export let href: string;
	export let label: string;
</script>

<a {href} id="btn" style="margin-top: {marginTop}px">{label}</a>

<style>
	#btn {
		color: var(--secondary);
		border-radius: 16px;
		text-decoration: none;
		font-size: var(--m);
		font-weight: normal;
		padding: 8px 0px;
		transition: color background-color 0.3s ease;
	}

	#btn:hover {
		color: var(--primary);
	}
</style>
