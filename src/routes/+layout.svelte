<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="temp">Twitter</a>
	<a href="temp">Bluesky</a>
	<a href="temp">VGen</a>
	<a href="temp">Toyhouse</a>
</nav>

{@render children()}
