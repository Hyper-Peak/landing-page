<script lang="ts">
	export let title: string;
	export let marginTop: number = 12;
</script>

<div id="card" style="margin-top: {marginTop}px;">
	<h3>{title}</h3>
	<slot />
</div>

<style>
	#card {
		display: flex;
		flex-direction: column;
		width: min(90%, 620px);
		box-sizing: border-box;
		padding: 24px;
		border-radius: 32px;
		background-color: var(--bg2);
	}

	h3 {
		font-size: var(--l);
		color: var(--primary);
	}
</style>
