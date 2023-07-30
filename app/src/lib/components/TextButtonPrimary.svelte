<script lang="ts">
	export let href: string;
	export let marginTop: number = 0;
	export let paddingHorizontal: number = 0;
</script>

<a {href} id="btn" style="margin-top: {marginTop}px;--paddingHor: {paddingHorizontal}px;">
	<slot />
</a>

<style>
	#btn {
		color: var(--onBg);
		border-radius: 16px;
		font-size: var(--m);
		padding: 8px var(--paddingHor);
		transition: color background-color 0.3s ease;
	}

	#btn:hover {
		color: var(--primary);
	}
</style>
