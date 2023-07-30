<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import InfoCard from './components/InfoCard.svelte';
	import InfoText from './components/InfoText.svelte';
	import PricingTip from './components/PricingTip.svelte';
</script>

<div id="content">
	<h1 class="mt24">Fixed per project</h1>
	<p class="mt12">We charge only for what we've delivered<br>
		and only after you've explicitly approved it.</p>

	<InfoCard title="Project" marginTop={24}>
		<InfoText>A software product with clear vision and expectations.
		The minimum price for a project is EUR 2,000 VAT.</InfoText>
		<PricingTip>It's key to trust each other and be on the </PricingTip>
	</InfoCard>

	<InfoCard title="Milestone">
		Lorem ipsum
	</InfoCard>

	<InfoCard title="Sprint">
		Lorem ipsum
	</InfoCard>

	<InfoCard title="Changes">
		Lorem ipsum
	</InfoCard>

	<InfoCard title="Non-binding">
		Lorem ipsum
	</InfoCard>

	<InfoCard title="Maintenance">
		Lorem ipsum
	</InfoCard>

	<PrimaryButton href="/contact" marginTop={24}>Contact us</PrimaryButton>
</div>

<UnderConstruction name="Pricing" />

<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding-bottom: 48px;
		padding-left: 8px;
		padding-right: 8px;
	}

	h1 {
		font-size: var(--xl);
		text-align: center;
	}

	p {
		font-size: var(--m);
		color: var(--secondary);
		text-align: center;
	}
</style>
