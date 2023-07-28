<script lang="ts">
	import TextButton from '$lib/components/TextButton.svelte';
</script>

<div id="other">
    <h2>Something else?</h2>
    <div id="content">
        <p id="other-p">Ask us. We may be able to build it.</p>
        <TextButton href="/contact" label="Contact us" />
    </div>
</div>

<style>
    #other {
        display: flex;
		padding: 16px;
		border-radius: 16px;
		border-color: var(--gray);
		border-width: 1px;
		border-style: solid;
        flex-direction: column;
    }

    h2 {
		font-size: var(--l);
	}

    #content {
        display: flex;
        flex-direction: column;
    }

    p {
		font-size: var(--m);
        margin-top: 12px;
        margin-bottom: 8px;
	}
</style>
