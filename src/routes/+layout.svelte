<script lang="ts">
	import "./layout.css";
	import Header from "$lib/Header.svelte";

	let { children } = $props();
</script>

<Header />{@render children()}
