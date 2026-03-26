<script lang="ts">
	import "./layout.css";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<header>
	<Header />
</header>
<div class="navbar">
	<nav>
		<a href="/">Home</a>
		<a href="/gallery">Gallery</a>
		<a href="/commission">Commission</a>
		<a href="/about">About</a>
	</nav>
</div>
<div class="main">
	{@render children()}
</div>

<footer>
	<Footer />
</footer>
