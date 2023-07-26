<script lang="ts">
	export let href = '';
	export let label = uppercaseFirst(href);

	function uppercaseFirst(str: string): string {
		return str.charAt(1).toUpperCase() + str.slice(2);
	}
</script>

<a id="navlink" {href}>{label}</a>

<style>
	#navlink {
		font-size: var(--s);
		text-decoration: none;
		padding: 12px 0px;
	}

	#navlink:hover {
		color: var(--secondary);
	}
</style>
