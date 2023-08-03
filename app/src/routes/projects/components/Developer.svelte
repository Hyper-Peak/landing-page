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

<div id="dev-card">
	<div id="identity-col">
		<img id="profile-pic" src={profilePic} alt={`${names} software developer`} />
		<div id="social-media" class="mt8">
			<a href={linkedInUrl} target="_blank">
				<img src={LinkedInLogo} alt={`${names} linkedin`} class="social-icon" />
			</a>
			<a href={githubUrl} target="_blank">
				<img src={GithubLogo} alt={`${names} github`} class="social-icon" />
			</a>
		</div>
	</div>
	<div id="info-col">
		<h3>{names}</h3>
		<slot />
	</div>
</div>

<style>
	#dev-card {
		width: 100%;
		max-width: 320px;
		border-radius: 16px;
		border-style: solid;
		border-width: 2px;
		border-color: var(--gray);
		padding: 8px;
		display: flex;
		flex-direction: row;
	}

	#identity-col {
		display: flex;
		flex-direction: column;
	}

	h3 {
		font-size: var(--l);
	}

	#profile-pic {
		width: 112px;
		height: 112px;
		border-radius: 16px;
	}

	#social-media {
		display: flex;
		padding-left: 8px;
		align-items: center;
		gap: 8px;
		flex-direction: row;
	}

	.social-icon {
		width: 24px;
		height: 24px;
	}

	#info-col {
		padding-top: 8px;
		padding-bottom: 8px;
		width: 100%;
		padding-left: 16px;
		display: flex;
		flex-direction: column;
	}
</style>
