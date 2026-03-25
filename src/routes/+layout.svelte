<script lang="ts">
	import "./layout.css";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<header>
	<Header />
</header>

<div class="main">
	{@render children()}
</div>

<footer>
	<Footer />
</footer>
