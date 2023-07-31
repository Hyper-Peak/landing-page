<script lang="ts">
	import { globalColors } from '$lib/colors';
	import CtasRow from '$lib/components/CtasRow.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
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

	<div id="cards-grid" class="mt24">
		<InfoCard title="1. Project">
			<InfoText>
				A software project with clear vision and expectations.<br />
				You must know what you need so we can give you a quote.
			</InfoText>
			<PricingTip color={colors.gray}>
				The minimum price for a project is EUR 2,000 with VAT.
			</PricingTip>
		</InfoCard>

		<InfoCard title="2. Milestones">
			<InfoText>
				We divide the project into multiple smaller pieces that we can deliver and demo -
				milestones. Each milestone must have a fixed scope and price.
			</InfoText>
			<PricingTip color={colors.gray}>Our goal complete a milestone every 1-2 weeks.</PricingTip>
		</InfoCard>

		<InfoCard title="3. Client approval">
			<InfoText>
				When we complete a milestone, we'll deliver a demo product to you. You'll have to test and
				review it - approve, request changes, reject.
			</InfoText>

			<PricingTip color={colors.secondary}>
				[Approve] All good, move to the next milestone.
			</PricingTip>

			<PricingTip color={colors.gray}>[Request changes] Bugs or small tweaks only.</PricingTip>

			<PricingTip color={globalColors.red}>
				[Reject] We terminate the project. You owe nothing, no hard feelings.
			</PricingTip>
		</InfoCard>

		<InfoCard title="4. Payments">
			<InfoText>
				You pay only after approving a milestone. We'll continue developing the next milestone only
				after the payment for the previous one is received.
			</InfoText>

			<PricingTip color={colors.secondary}>
				Tip: To keep development smooth and fast: review and pay milestones fast.
			</PricingTip>

			<PricingTip color={colors.gray}>
				There are no refunds for already payed milestones.
			</PricingTip>
		</InfoCard>

		<InfoCard title="5. Scope changes">
			<InfoText>
				Changes are not included in the price because we work on a "fixed price" model and they
				can't be predicted. Each change must be either approved by us or re-negotiated.
			</InfoText>

			<PricingTip color={colors.gray}>
				If the change is small enough we may try to do it for free.
			</PricingTip>
		</InfoCard>

		<InfoCard title="6. Non-binding">
			<InfoText>
				If things are going smooth, great! We may do multuple projects together. Otherwise, we leave
				the door for immediate termination by either party open.
			</InfoText>

			<PricingTip color={colors.gray}>
				We believe that business relationships should continue only if everyone involved is happy.
			</PricingTip>
		</InfoCard>

		<InfoCard title="7. Maintenance">
			<InfoText>
				Maintenance is not included in the service. It's treated as starting a new project following
				<Highlight href="/pricing">the same process</Highlight>.
			</InfoText>
		</InfoCard>
	</div>

	<h3 class="mt24">Sounds good?</h3>

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

	#cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 16px;
		box-sizing: border-box;
		grid-auto-flow: row;
		padding-left: 16%;
		padding-right: 16%;
	}

	@media (max-width: 600px) {
		#cards-grid {
			grid-template-columns: repeat(1, 1fr);
			padding-left: 8px;
			padding-right: 8px;
		}
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
</style>
