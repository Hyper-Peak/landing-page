<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import { ds } from '$lib/design-system';
	import InfoCard from './components/InfoCard.svelte';
	import InfoText from './components/InfoText.svelte';
	import PricingTip from './components/PricingTip.svelte';

	$: colors = $ds.colors
</script>

<div id="content">
	<h1 class="mt24">Fixed per project</h1>
	<p class="mt12">
		We charge only for what we've delivered<br />
		and only after you've explicitly approved it.
	</p>

	<InfoCard title="Project" marginTop={24}>
		<InfoText>
			A software project with clear vision and expectations. 
			The total price is fixed and determined based on the scope of the work.
		</InfoText>
		<PricingTip color={colors.gray}>
			The minimum price for a project is EUR 2,000 with VAT.
		</PricingTip>
	</InfoCard>

	<InfoCard title="Milestone">
		<InfoText>
			We divide the project into multiple smaller pieces that we can deliver and demo. Our goal is
			to complete a milestone every 1-2 weeks.
		</InfoText>
		<PricingTip color={colors.primary}>
			Before starting, we must agree on the milestones and their price.
		</PricingTip>

		<PricingTip color={colors.primary}>
			∑ of each milestone cost = project price
		</PricingTip>
	</InfoCard>

	<InfoCard title="Client approval & payments">
		<InfoText>
			After we deliver a milestone you'll have to test and review it.
			If you're happy with the result you can pay the milesone and
			we'll continue developing the next milestone.
		</InfoText>

		<PricingTip negative={true}>
			If you don't like the result, you can either request changes
			or 
		</PricingTip>
	</InfoCard>

	<InfoCard title="Changes">Lorem ipsum</InfoCard>

	<InfoCard title="Non-binding">Lorem ipsum</InfoCard>

	<InfoCard title="Maintenance">Lorem ipsum</InfoCard>

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
