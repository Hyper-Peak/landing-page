<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<Spacer weight={3} />

<h1 id="title" class="xxl"><b><i>HyperPeak</i></b></h1>

<p class="l mt32">A software service company.</p>
<p class="l mt16">
	We can <a href="/services" class="highlight">build</a> your product on
	<a href="/services" class="highlight">all platforms.</a>
</p>
<PrimaryButton href="/services" label="Our services" marginTop={24} />

<h3 id="how" class="mt32">How does it work?</h3>
<ol>
	<li>Tell us your project and budget 💡</li>
	<li>We'll confirm if we can build it 📊</li>
	<li>Together we clarify the details and get started 🔨</li>
	<li>We'll deliver the product on weekly milestones 🎯</li>
	<li>Only pay for the milestones you approve ✅</li>
</ol>
<SecondaryButton href="/contact" label="Contact us" />

<Spacer weight={7} />

<style>
	#title {
		line-height: var(--xxl);
		padding: 0px;
	}

	#how {
		font-size: var(--l);
	}

	li {
		font-size: var(--m);
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
