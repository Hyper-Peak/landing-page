<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<Spacer weight={3} />

<h1 id="title" class="xxl"><b><i>HyperPeak</i></b></h1>

<p class="l mt48">A software service company.</p>
<p class="l mt16">We can build your product on all platforms.</p>
<PrimaryButton href="/services" label="Our services" marginTop={52} />

<Spacer weight={7} />

<style>
	#title {
		line-height: var(--xxl);
		padding: 0px;
	}
</style>
