<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import DevInfo from './components/DevInfo.svelte';
	import Developer from './components/Developer.svelte';
</script>

<UnderConstruction name="Projects" />

<div id="content">
	<h2>Developers</h2>
	<Developer
		names="Iliyan Germanov"
		linkedInUrl="https://www.linkedin.com/in/iliyan-germanov-3963b5b9/"
		githubUrl="https://github.com/ILIYANGERMANOV"
		profilePic="https://media.licdn.com/dms/image/D4D03AQGw4oSY9Pws5w/profile-displayphoto-shrink_400_400/0/1691062757631?e=1696464000&v=beta&t=ceNZE2ObIud3ruYHNHnIGAeFpnPq-tZLi45r2UbMyVk"
	>
		<DevInfo slot="info">Lorem ipsum, lorem ipsum jdfghfdlghfdglfdhglkfdhglkfdhgfdfdhgld</DevInfo>

		<div slot="badges" />
	</Developer>

	<h2>Projects</h2>
</div>

<style>
</style>
