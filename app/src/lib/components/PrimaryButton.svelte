<script lang="ts">
	export let marginTop: number = 0;
	export let href: string;
	export let label: string;
</script>

<a {href} class="btn-primary" style="margin-top: {marginTop}px">{label}</a>

<style>
	.btn-primary {
		display: inline-block; /* Make the link behave like a block element */
		background-color: var(--primary);
		color: var(--white);
		text-decoration: none; /* Remove underline */
		font-size: var(--l);
		font-weight: 400;
		padding: 16px 48px;
		border-radius: 32px; /* Adjust the border radius to your liking */
		transition: color background-color 0.3s ease;

		/* Change the color on hover */
		&:hover {
			background-color: var(--secondary) !important;
			color: var(--white) !important;
		}
	}
</style>
