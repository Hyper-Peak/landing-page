<script lang="ts">
	export let marginTop: number = 0;
	export let href: string;
	export let label: string;
</script>

<a {href} class="btn-primary" style="margin-top: {marginTop}px">{label}</a>

<style>
	.btn-primary {
		display: inline-block; /* Make the link behave like a block element */
		background-color: var(--primary) !important;
		color: var(--onPrimary) !important;
		text-decoration: none; /* Remove underline */
		font-size: var(--m);
		padding: 16px 48px !important;
		border-radius: 32px; /* Adjust the border radius to your liking */
		transition: background-color 0.3s ease;

		/* Change the color on hover */
		&:hover {
			color: var(--primaryInv) !important;
		}
	}
</style>
