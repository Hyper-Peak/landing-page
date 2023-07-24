<script lang="ts">
	import AppTheme from '$lib/AppTheme.svelte';
	export const prerender = true;
</script>

<AppTheme>
	<slot />
</AppTheme>
