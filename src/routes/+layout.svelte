<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
	import Header from "$lib/Header.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}

<style>
	:root {
		font-family: system-ui;
		background-color: #242424;
		color: rgba(255, 255, 255, 0.87);
	}
</style>
