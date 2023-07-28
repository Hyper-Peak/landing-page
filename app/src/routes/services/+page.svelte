<script lang="ts">
	import Android from '$lib/assets/technologies/android-logo.svg';
	import iOSDark from '$lib/assets/technologies/apple-logo-dark.svg';
	import iOSLight from '$lib/assets/technologies/apple-logo-light.svg';
	import ComposeMultiplatform from '$lib/assets/technologies/compose-multiplatform-logo.svg';
	import JetpackCompose from '$lib/assets/technologies/jetpack-compose-logo.svg';
	import Kotlin from '$lib/assets/technologies/kotlin-logo.svg';
	import Ktor from '$lib/assets/technologies/ktor-logo.svg';
	import Svelte from '$lib/assets/technologies/svelte-logo.svg';
	import TypeScript from '$lib/assets/technologies/typescript-logo.svg';
	import Web from '$lib/assets/technologies/web.svg';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
	import Service from './components/ServiceCard.svelte';
	import SomethingElse from './components/SomethingElse.svelte';
	import Technology from './components/Technology.svelte';
</script>

<div id="content">
	<h1>Software development</h1>

	<div id="services" class="mt24">
		<Service name="Android" logo={Android}>
			<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
			<Technology
				name="Jetpack Compose"
				logo={JetpackCompose}
				url="https://developer.android.com/jetpack/compose?gclid=CjwKCAjwzo2mBhAUEiwAf7wjkpF7FMfiIzNyVVjDFQY_ANHfQ4UG26XWC7iAodaLqZCnep724u_Q1xoCRS8QAvD_BwE&gclsrc=aw.ds"
			/>
		</Service>

		<Service name="iOS" logo={iOSLight} logoDark={iOSDark}>
			<Technology
				name="Kotlin Multiplatform"
				logo={Kotlin}
				url="https://kotlinlang.org/docs/multiplatform.html"
			/>
			<Technology
				name="Compose Multiplatform"
				logo={ComposeMultiplatform}
				url="https://www.jetbrains.com/lp/compose-multiplatform/"
			/>
		</Service>

		<Service name="Web" logo={Web}>
			<Technology name="Svelte" logo={Svelte} url="https://svelte.dev/" />
			<Technology name="TypeScript" logo={TypeScript} url="https://www.typescriptlang.org/" />
		</Service>

		<Service name="Backend">
			<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
			<Technology name="Ktor" logo={Ktor} url="https://ktor.io/" />
		</Service>

		<Service name="Desktop">
			<Technology
				name="Kotlin Multiplatform"
				logo={Kotlin}
				url="https://kotlinlang.org/docs/multiplatform.html"
			/>
			<Technology
				name="Compose Multiplatform"
				logo={ComposeMultiplatform}
				url="https://www.jetbrains.com/lp/compose-multiplatform/"
			/>
		</Service>

		<SomethingElse />
	</div>

	<h2 class="mt24">Why Kotlin & Svelte?</h2>
	<p class="mt8">
		We use modern technologies with elegant software design.<br />
		This allows us to craft simple and peak performance products.<br />
		For example, like this website and our other apps in
		<a href="/projects" class="highlight">projects</a>.
	</p>

	<h2 class="mt32">What next?</h2>
	<p class="mt8">
		You can check our projects and see if HyperPeak is a good pick for you.<br/>
		Or directly contact us and <a href="/contact" class="highlight">get a quote</a> for your project.
	</p>

	<div class="ctas-row mt16">
		<PrimaryButton href="/pricing" label="Let's work!" />
		<SecondaryButton href="/projects" label="Our projects" />
	</div>
</div>

<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 48px;
	}

	h1 {
		font-size: var(--xl);
		line-height: var(--xl);
		padding-left: 8px;
		padding-right: 8px;
		text-align: center;
	}

	h2 {
		font-size: var(--l);
		font-size: var(--l);
		padding-left: 8px;
		padding-right: 8px;
		text-align: center;
	}

	p {
		margin-top: 8px;
		font-size: var(--m);
		line-height: calc(var(--m) + 8px);
		padding-left: 8px;
		padding-right: 8px;
		text-align: center;
	}

	#services {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px;
		grid-auto-flow: row;
		padding-left: 16px;
		padding-right: 16px;
	}

	@media (max-width: 800px) {
		#services {
			grid-template-columns: repeat(2, 1fr);
			padding-left: 8px;
			padding-right: 8px;
		}
	}

	@media (max-width: 500px) {
		#services {
			grid-template-columns: repeat(1, 1fr);
			padding-left: 8px;
			padding-right: 8px;
		}
	}

	.ctas-row {
		display: flex;
		flex-direction: row;
		gap: 12px;
		justify-content: center;
		flex-wrap: wrap;
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
