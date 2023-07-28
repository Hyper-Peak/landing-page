<script lang="ts">
	import Android from '$lib/assets/technologies/android-logo.svg';
	import iOS from '$lib/assets/technologies/apple-logo.svg';
	import JetpackCompose from '$lib/assets/technologies/jetpack-compose-logo.svg';
	import ComposeMultiplatform from '$lib/assets/technologies/compose-multiplatform-logo.svg';
	import Kotlin from '$lib/assets/technologies/kotlin-logo.svg';
	import Svelte from '$lib/assets/technologies/svelte-logo.svg';
	import TypeScript from '$lib/assets/technologies/typescript-logo.svg';
	import Ktor from '$lib/assets/technologies/ktor-logo.svg';
	import Service from './components/Service.svelte';
	import Technology from './components/Technology.svelte';
</script>

<div id="services">
	<Service name="Android Development" logo={Android}>
		<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
		<Technology
			name="Jetpack Compose"
			logo={JetpackCompose}
			url="https://developer.android.com/jetpack/compose?gclid=CjwKCAjwzo2mBhAUEiwAf7wjkpF7FMfiIzNyVVjDFQY_ANHfQ4UG26XWC7iAodaLqZCnep724u_Q1xoCRS8QAvD_BwE&gclsrc=aw.ds"
		/>
	</Service>

    <Service name="iOS Development" logo={iOS}>
		<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
		<Technology
			name="Compose Multiplatform"
			logo={ComposeMultiplatform}
			url="https://www.jetbrains.com/lp/compose-multiplatform/"
		/>
	</Service>

    <Service name="Web Development" logo={iOS}>
		<Technology name="Svelte" logo={Svelte} url="https://svelte.dev/" />
		<Technology
			name="TypeScript"
			logo={TypeScript}
			url="https://www.typescriptlang.org/"
		/>
	</Service>

    <Service name="Backend Development" logo={iOS}>
		<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
		<Technology
			name="Ktor"
			logo={Ktor}
			url="https://ktor.io/"
		/>
	</Service>

    <Service name="Desktop apps" logo={iOS}>
		<Technology name="Kotlin" logo={Kotlin} url="https://kotlinlang.org/" />
		<Technology
			name="Compose Multiplatform"
			logo={ComposeMultiplatform}
			url="https://www.jetbrains.com/lp/compose-multiplatform/"
		/>
	</Service>

</div>

<style>
	#services {
		display: grid;
	}
</style>
