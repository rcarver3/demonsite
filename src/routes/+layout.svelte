<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="main-nav">
	<h1>
		<a href="https://x.com/demoniclyonline" target="_blank" rel="noreferrer"
			>Twitter</a
		>
		<a
			href="https://bsky.app/profile/demonically-online.bsky.social"
			target="_blank"
			rel="noreferrer">Bluesky</a
		>
		<a
			href="https://toyhou.se/demonically_online"
			target="_blank"
			rel="noreferrer">Toyhouse</a
		>
		<a
			href="https://vgen.co/demonically_online"
			target="_blank"
			rel="noreferrer">VGen</a
		>
	</h1>
</nav>

{@render children()}

<style>
	:root {
		font-family: system-ui;
		background-color: #242424;
		color: rgba(255, 255, 255, 0.87);
	}
	a {
		font-weight: 500;
		color: #e2e2e2;
		text-decoration: inherit;
	}
	.main-nav {
		text-align: center;
	}
</style>
