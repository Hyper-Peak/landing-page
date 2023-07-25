<script lang="ts">
	import { page } from '$app/stores';

	export let href = '';
	export let label = uppercaseFirst(href);

	function uppercaseFirst(str: string): string {
		return str.charAt(1).toUpperCase() + str.slice(2);
	}
</script>

{#if $page.url.pathname !== href}
	<a {href}>{label}</a>
{/if}
