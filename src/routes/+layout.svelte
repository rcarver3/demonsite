<script lang="ts">
	import { resolve } from "$app/paths";
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
		<a href={resolve("/")}>Home</a>
		<a href={resolve("/gallery")}>Gallery</a>
		<a href={resolve("/commission")}>Commission</a>
		<a href={resolve("/about")}>About</a>
	</nav>
</div>
<div class="main">
	{@render children()}
</div>

<footer>
	<Footer />
</footer>
