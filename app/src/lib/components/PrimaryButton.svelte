<script lang="ts">
	export let href: string;
	export let marginTop: number = 0;
</script>

<a {href} id="btn-primary" style="margin-top: {marginTop}px">
	<slot />
</a>

<style>
	#btn-primary {
		background-color: var(--primary);
		color: var(--white);
		text-decoration: none;
		font-size: var(--m);
		font-weight: normal;
		/* 14px vertical so it has the same size as `SecondaryButton`: 12px + 2px for the border */
		padding: 14px 32px;
		border-radius: 36px;
		transition: color background-color 0.3s ease;
	}

	#btn-primary:hover {
		background-color: #62abf5;
		color: var(--black);
	}
</style>
