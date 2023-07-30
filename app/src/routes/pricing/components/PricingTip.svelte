<script lang="ts">
	export let color: string;

	$: style = `--color: ${color}`;
</script>

<p class="mt12" {style}>
	<slot />
</p>

<style>
	p {
		font-size: var(--s);
		font-weight: bold;
		color: var(--color);
		position: relative;
		padding-left: 12px;
	}

	p::before {
		content: '';
		position: absolute;
		left: 0; /* align the line to the left */
		top: 0; /* align the line to the top */
		height: 100%; /* make the line as tall as the content */
		width: 4px; /* width of the line */
		border-radius: 4px;
		background-color: var(--color); /* color of the line */
	}
</style>
