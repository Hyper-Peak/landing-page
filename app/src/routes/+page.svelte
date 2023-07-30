<script lang="ts">
	import CtasRow from '$lib/components/CtasRow.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import TextButtonPrimary from '$lib/components/TextButtonPrimary.svelte';
	import TextButton from '$lib/components/TextButtonSecondary.svelte';
	import SecondaryButton from './../lib/components/SecondaryButton.svelte';
</script>

<div id="main">
	<h1 id="title" class="xxl"><b><i>HyperPeak</i></b></h1>

	<p class="l mt32">A software service company.</p>
	<p class="l mt16">
		We can <Highlight href="/services">build</Highlight> your product on
		<Highlight href="/services">all platforms.</Highlight>
	</p>
	<PrimaryButton href="/services" marginTop={24}>Our services</PrimaryButton>
</div>

<hr class="divider" />

<div id="tldr">
	<h3 id="how">How it works?</h3>
	<ol>
		<li>Tell us your project and budget. 💡</li>
		<li>We'll confirm if we can build it. 📊</li>
		<li>Together we clarify the details and get started. 🔨</li>
		<li>We'll deliver the product on weekly milestones. 🎯</li>
		<li>Only pay for the milestones you approve. ✅</li>
	</ol>
	<CtasRow marginTop={24} gap={12}>
		<SecondaryButton href="/pricing">Pricing</SecondaryButton>
		<TextButtonPrimary href="/contact">Contact us</TextButtonPrimary>
	</CtasRow>
</div>

<style>
	h1,
	p {
		padding-left: 8px;
		padding-right: 8px;
	}

	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 40vh;
		padding-bottom: 24px;
	}

	#title {
		line-height: var(--xxl);
		padding: 0px;
	}

	.divider {
		width: 20%;
		height: 2px;
		background-color: var(--gray);
		border: none;
		border-radius: 8px;
		margin: 0 auto;
	}

	#tldr {
		display: flex;
		padding-top: 32px;
		flex-direction: column;
		align-items: center;
		border-radius: 32px 32px 0px 0px;
		background-color: var(--bg2);
		height: 60vh;
		width: 100%;
		flex-grow: 1;

		transition: background-color 0.3s ease-in;
	}

	#how {
		font-size: var(--l);
		font-weight: bold;
		padding-bottom: 0px;
		margin-bottom: 0px;
	}

	ol {
		margin-top: 12px;
		padding-top: 0px;
		margin-bottom: 0px;
	}

	li {
		font-size: var(--m);
		margin-left: 16px;
		margin-right: 16px;
		margin-top: 16px;
	}

	p {
		text-align: center;
		margin-left: 8px;
		margin-right: 8px;
	}
</style>
