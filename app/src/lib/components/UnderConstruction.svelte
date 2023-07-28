<script lang="ts">
	import PrimaryButton from './PrimaryButton.svelte';

	export let name: string;
</script>

<div id="content" class="mt48">
	<h2 id="title">🚧 {name} 🚧</h2>
	<h1 id="constr" class="mt4"><i>Under construction...</i></h1>
	<PrimaryButton href="/" label="Back to Home" />
</div>

<style>
	#content {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
        margin-left: 8px;
        margin-right: 8px;
	}

	#title {
		font-size: var(--xxl);
		font-weight: bold;
	}

	#constr {
		font-size: var(--xl);
		color: var(--orange);
		margin-bottom: 12px;
	}
</style>
