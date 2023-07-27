<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/SecondaryButton.svelte';
</script>

<div id="main">
	<h1 id="title" class="xxl"><b><i>HyperPeak</i></b></h1>

	<p class="l mt32">A software service company.</p>
	<p class="l mt16">
		We can <a href="/services" class="highlight">build</a> your product on
		<a href="/services" class="highlight">all platforms.</a>
	</p>
	<PrimaryButton href="/services" label="Our services" marginTop={24} />
</div>

<hr class="divider" />

<div id="tldr" class="show-later">
	<h3 id="how">How it works?</h3>
	<ol>
		<li>Tell us your project and budget. 💡</li>
		<li>We'll confirm if we can build it. 📊</li>
		<li>Together we clarify the details and get started. 🔨</li>
		<li>We'll deliver the product on weekly milestones. 🎯</li>
		<li>Only pay for the milestones you approve. ✅</li>
	</ol>
	<SecondaryButton href="/contact" label="Contact us" marginTop={24} />
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
		height: 40%;
		padding-bottom: 24px;

		transform: translateY(50%);

		animation: moveMain 0.5s 3s ease-in forwards;
	}

	@keyframes moveMain {
		100% {
			transform: translateY(0);
		}
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

		/* Initially invisible */
		opacity: 0;
		visibility: hidden;

		animation: fadeInSlideUp 0.5s 3.5s ease-in forwards;
	}

	.show-later {
		/* Initially invisible */
		opacity: 0;
		visibility: hidden;

		animation: fadeInSlideUp 0.5s 3s ease-in forwards;
	}

	@keyframes fadeInSlideUp {
		0% {
			opacity: 0;
			visibility: hidden;
			transform: translateY(20%);
		}
		/* Slightly after start */
		1% {
			visibility: visible;
		}
		100% {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
	}

	#tldr {
		display: flex;
		padding-top: 32px;
		padding-bottom: 64px;
		flex-direction: column;
		align-items: center;
		border-radius: 32px 32px 0px 0px;
		background-color: var(--bg2);
		height: 50%;
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
		margin-left: 8px;
		margin-right: 8px;
	}
</style>
