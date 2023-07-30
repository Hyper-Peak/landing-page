<script lang="ts">
</script>

<p class="mt12">
	<slot />
</p>

<style>
    p {
        font-size: var(--s);
        font-weight: normal;
        color: var(--secondary);
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
		background-color: var(--secondary); /* color of the line */
	}
</style>
