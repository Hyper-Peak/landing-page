<script lang="ts">
	export let marginTop: number = 0;
	export let href: string;
	export let label: string;
</script>

<a {href} id="btn-primary" style="margin-top: {marginTop}px">{label}</a>

<style>
	#btn-primary {
		display: inline-block;
		background-color: var(--primary);
		color: var(--white);
		text-decoration: none;
		font-size: var(--l);
		font-weight: normal;
		padding: 16px 48px;
		border-radius: 32px;
		transition: color background-color 0.3s ease;
	}

	#btn-primary:hover {
		background-color: #62ABF5;
		color: var(--black);
	}
</style>
