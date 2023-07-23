<script>
	import { initializeTheme, theme } from '$lib/theme';
	import '../app.css';

	const white = '#f8f8ff';
	const black = '1c1c1c';

	let styles = {
		pure: white,
		pureInv: black
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

	initializeTheme();

	// Set the theme attribute on the HTML element whenever the store value changes
	theme.subscribe((value) => {
		if (value === 'light') {
			styles = {
				pure: white,
				pureInv: black
			};
		} else {
			styles = {
				pure: black,
				pureInv: white
			};
		}
	});
</script>

<style>
	body {
		background-color: var(--pure, #f8f8ff);
	}

	h1,
	h2,
	h3,
	p {
		color: var(--pureInv, #1c1c1c);
	}
</style>

<div style={cssVarStyles}>
	<slot />
</div>
