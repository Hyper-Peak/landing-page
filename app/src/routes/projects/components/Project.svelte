<script lang="ts">
	export let logo: string;
	export let name: string;
	export let description: string;
	export let href: string;
</script>

<a {href} id="project">
	<div id="header">
		<img id="logo" src={logo} alt={`${name} projec`} />
		<h3>{name}</h3>
	</div>
	<p>{description}</p>
	<slot />
</a>

<style>
	#logo {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	a {
		text-decoration: none;
	}

	#project {
		display: flex;
		flex-direction: column;
	}

	#header {
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;
	}
</style>
