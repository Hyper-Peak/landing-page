<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		color: var(--secondary) !important;
		font-weight: bold !important;
		text-decoration: none !important;
	}

	a:hover {
		color: var(--primary) !important;
	}
</style>
