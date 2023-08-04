<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import DevBadge from './components/DevBadge.svelte';
	import DevInfo from './components/DevInfo.svelte';
	import Developer from './components/Developer.svelte';
	import Project from './components/Project.svelte';
</script>

<UnderConstruction name="Projects" />

<div id="content">
	<h2>Developers</h2>
	<p>Currently a one-man show...</p>
	<Developer
		names="Iliyan Germanov"
		linkedInUrl="https://www.linkedin.com/in/iliyan-germanov-3963b5b9/"
		githubUrl="https://github.com/ILIYANGERMANOV"
		profilePic="https://media.licdn.com/dms/image/D4D03AQGw4oSY9Pws5w/profile-displayphoto-shrink_400_400/0/1691062757631?e=1696464000&v=beta&t=ceNZE2ObIud3ruYHNHnIGAeFpnPq-tZLi45r2UbMyVk"
		badges={['Android', 'Kotlin', 'FP', 'Lorem ipsum']}
	>
		<div class="mt4">
			<DevInfo>Lorem ipsum, lorem ipsum lorem ipsum sdjff</DevInfo>
		</div>
	</Developer>

	<h2>Projects</h2>

	<Project
		name="Ivy Wallet"
		href="https://play.google.com/store/apps/details?id=com.ivy.wallet"
		logo="https://play-lh.googleusercontent.com/YHXVmEDX8ninFHoor_-xS4mARMxS6ql2IxjK-CVzLOu-bHdYJzdHDc5HokI97Sp4RXfA=w480-h960-rw"
		description="Ivy Wallet is a free budget manager and spending tracker app that’ll help you manage your personal finances with ease."
	/>
</div>

<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 64px;
		padding-left: 8px;
		padding-right: 8px;
		margin-left: 8px;
		margin-right: 8px;
	}
</style>
