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
	import Service from './components/ServiceCard.svelte';
	import SomethingElse from './components/SomethingElse.svelte';
	import Technology from './components/Technology.svelte';
</script>

<div id="content">
	<h1 id="title">Software development</h1>

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
</div>

<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#title {
		font-size: var(--xl);
		line-height: var(--xl);
	}

	#services {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px;
		grid-auto-flow: row;
		padding-left: 16px;
		padding-right: 16px;
	}

	@media (max-width: 600px) {
		#services {
			grid-template-columns: repeat(2, 1fr);
			padding-left: 8px;
			padding-right: 8px;
		}
	}
</style>
