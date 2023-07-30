<script lang="ts">
    export let paddingBottom: number = 8;
</script>

<p style="--paddingBottom:{paddingBottom}px;">
    <slot/>
</p>

<style>
    p {
		font-size: var(--m);
		color: var(--onBg);
        padding-top: 12px;
        padding-bottom: var(--paddingBottom);
	}
</style>