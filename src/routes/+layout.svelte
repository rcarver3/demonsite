<script lang="ts">
	import Header from "$lib/Header.svelte";
	let { children } = $props();
</script>

<Header />

{@render children()}

<style>
	:root {
		font-family: system-ui;
		background-color: #242424;
		color: rgba(255, 255, 255, 0.87);
	}
</style>
