<script>
	import { page } from '$app/stores';
</script>

{#key $page.url.pathname}
	<div id="content">
		<slot />
	</div>
{/key}

<style>
	@keyframes fadeInSlideUp {
		0% {
			opacity: 0;
			transform: translateY(32px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	#content {
		animation: fadeInSlideUp 0.5s ease-out forwards;
	}
</style>
