<script lang="ts">
	import GithubLogoLight from '$lib/assets/github-logo-light.svg';
	import GithubLogoDark from '$lib/assets/github-logo-dark.svg';
	import LinkedInLogo from '$lib/assets/linkedin-logo.svg';
	import { ds } from '$lib/design-system';

	export let names: string;
	export let profilePic: string;
	export let linkedInUrl: string;
	export let githubUrl: string;

	$: GithubLogo = $ds.isLight ? GithubLogoLight : GithubLogoDark;
</script>

<div id="dev">
	<div id="identity-col">
		<img src={profilePic} alt={`${names} software developer`} />
		<div id="social-media">
			<a href={linkedInUrl} target="_blank"><img src={LinkedInLogo} alt={`${names} linkedin`} /></a>
			<a href={githubUrl} target="_blank"><img src={GithubLogo} alt={`${names} github`} /></a>
		</div>
	</div>
	<div id="info-col">
		<h3>{names}</h3>
		<slot name="info" />
		<slot id="badges" name="badges" />
	</div>
</div>

<style>
	#dev {
		border-radius: 16px;
		border-style: solid;
		border-width: 2px;
		border-color: var(--gray);
		padding: 16px;
		display: flex;
		flex-direction: row;
	}

	#identity-col {
		display: flex;
		flex-direction: column;
	}

	#social-media {
		display: flex;
		flex-direction: row;
	}

	img {
		width: 24px;
		height: 24px;
	}

	#info-col {
		display: flex;
		flex-direction: column;
	}

	#badges {
		display: flex;
		flex-direction: row;
	}
</style>
