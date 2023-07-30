<script lang="ts">
	import { globalColors } from '$lib/colors';
	import CtasRow from '$lib/components/CtasRow.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import { ds } from '$lib/design-system';
	import InfoCard from './components/InfoCard.svelte';
	import InfoText from './components/InfoText.svelte';
	import PricingTip from './components/PricingTip.svelte';

	$: colors = $ds.colors;
</script>

<div id="content">
	<h1 class="mt24">Fixed per project</h1>
	<p id="subtitle" class="mt12">
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
			review. If you're happy with the result, you can approve it and pay for the milesone.. After
			payment we'll continue developing the next milestone.
		</InfoText>

		<PricingTip color={colors.secondary}>
			[APPROVE] All good! You pay us the milestone and we continue working on the next one.
		</PricingTip>

		<PricingTip color={colors.gray}>
			[REQUEST CHANGES] Ofc, you can provide feedback and request small changes. We'll let you know
			if we can do them.
		</PricingTip>

		<PricingTip color={globalColors.red}>
			[REJECT] If you're not satisfied with the results, you can simply not pay and stop working
			with us. No hard feelings, no explanation needed.
		</PricingTip>
	</InfoCard>

	<InfoCard title="Scope changes">
		<InfoText>
			We work on a fixed price per project model and changes aren't included in the price. Each
			change must be either approved by us or renegotiated.
		</InfoText>

		<PricingTip color={colors.gray}>
			If the change doesn't affect much our timeline we'll try to do it for free. <i
				>(no promises!)</i
			>
		</PricingTip>
	</InfoCard>

	<InfoCard title="Non-binding">
		<InfoText>
			If we're all happy working together no one would back out and we might do multiple projects
			together. However, sometimes people or circumstances change... We leave the door for immediate
			termination by either side open.
		</InfoText>

		<PricingTip color={colors.gray}>
			We value freedom and believe that like in life, business relationships should continue only if
			they are mutually beneficial. Otherwise, it becomes toxic and no one wins.
		</PricingTip>
	</InfoCard>

	<InfoCard title="Maintenance">
		<InfoText>
			Because the model is "fixed price", maintenance isn't included in the service. It's treated as
			starting a new project following <Highlight href="/pricing">the same process</Highlight>.
		</InfoText>
	</InfoCard>

	<h3 class="mt24">Sounds good?</h3>

	<p id="summary" class="mt12">
		Or maybe you already have some questions?
		<br />
		That's cool - we're flexible!
	</p>

	<CtasRow marginTop={16}>
		<PrimaryButton href="/contact">Let's work!</PrimaryButton>
		<SecondaryButton href="/contact">Let's discuss.</SecondaryButton>
	</CtasRow>
</div>

<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding-bottom: 64px;
		padding-left: 8px;
		padding-right: 8px;
	}

	h1 {
		font-size: var(--xl);
		text-align: center;
	}

	#subtitle {
		font-size: var(--m);
		color: var(--onBg);
		text-align: center;
	}

	h3 {
		font-size: var(--l);
		color: var(--onBg);
		font-weight: bold;
		text-align: center;
	}

	#summary {
		font-size: var(--m);
		color: var(--onBg);
		text-align: center;
	}
</style>
