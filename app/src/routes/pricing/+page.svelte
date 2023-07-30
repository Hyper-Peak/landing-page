<script lang="ts">
	import { globalColors } from '$lib/colors';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import { ds } from '$lib/design-system';
	import InfoCard from './components/InfoCard.svelte';
	import InfoText from './components/InfoText.svelte';
	import PricingTip from './components/PricingTip.svelte';

	$: colors = $ds.colors;
</script>

<div id="content">
	<h1 class="mt24">Fixed per project</h1>
	<p class="mt12">
		<i
			>We charge a fixed price per project.<br />
			You pay only for the results that you approve.</i
		>
	</p>

	<InfoCard title="Project" marginTop={24}>
		<InfoText>
			A software project with clear vision and expectations. You must know what you need so we can
			give you a quote.
		</InfoText>
		<PricingTip color={colors.gray}>
			The minimum price for a project is EUR 2,000 with VAT.
		</PricingTip>
	</InfoCard>

	<InfoCard title="Milestones">
		<InfoText>
			We divide the project into multiple smaller pieces that we can deliver and demo - milestones.
			Each milestone must have a fixed scope and price.
		</InfoText>
		<PricingTip color={colors.secondary}>Our goal complete a milestone every 1-2 weeks.</PricingTip>
	</InfoCard>

	<InfoCard title="Client approval & payments">
		<InfoText>
			When we complete a milestone, we'll deliver a demo product that you'll have to test and
			review. If you're happy with the result, you can approve the milestone and pay it. After
			payment we'll continue developing the next milestone.
		</InfoText>

		<PricingTip color={colors.secondary}>
			[APPROVE] You pay us and we continue with the next milestone.
		</PricingTip>

		<PricingTip color={colors.gray}>
			[REQUEST CHANGES] Ofc, you can provide feedback
			and request small changes. We'll let you know if we can do them.
		</PricingTip>

		<PricingTip color={globalColors.red}>
			[REJECT] If you're not satisfied with the results, 
			you can simply not pay and stop working with us.
			No hard feelings, no explanation needed.
		</PricingTip>
	</InfoCard>

	<InfoCard title="Scope changes">Lorem ipsum</InfoCard>

	<InfoCard title="Timeline & deadlines">gdf</InfoCard>

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
		color: var(--onBg);
		text-align: center;
	}
</style>
