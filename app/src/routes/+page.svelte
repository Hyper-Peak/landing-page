<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
</script>

<h1 id="title" class="xxl"><b><i>HyperPeak</i></b></h1>

<p class="l mt32">A software service company.</p>
<p class="l mt16">
	We can <a href="/services" class="highlight">build</a> your product on
	<a href="/services" class="highlight">all platforms.</a>
</p>
<PrimaryButton href="/services" label="Our services" marginTop={24} />

<hr class="divider" />

<div id="tldr">
	<h3 id="how">How does it work?</h3>
	<ol>
		<li>Tell us your project and budget 💡</li>
		<li>We'll confirm if we can build it 📊</li>
		<li>Together we clarify the details and get started 🔨</li>
		<li>We'll deliver the product on weekly milestones 🎯</li>
		<li>Only pay for the milestones you approve ✅</li>
	</ol>
	<SecondaryButton href="/contact" label="Contact us" marginTop={12} />
</div>

<style>
	#title {
		line-height: var(--xxl);
		padding: 0px;
		margin-top: 72px;
	}

	#how {
		font-size: var(--xl);
	}

	#tldr {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.divider {
		width: 25%;
		height: 1px;
		background-color: var(--gray);
		border: none;
		border-radius: 50%;
		margin: 0 auto;

		margin-top: 36px;
		margin-bottom: 32px;
	}

	li {
		font-size: var(--m);
		margin-top: 8px;
	}

	.highlight {
		color: var(--secondary);
		font-weight: bold;
		text-decoration: none;
	}

	.highlight:hover {
		color: var(--primary);
	}

	p {
		text-align: center;
	}
</style>
