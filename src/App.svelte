<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="header">
    <Header />
  </div>

  <p>Press to love Felix!</p>

  <div class="card">
    <Counter />
  </div>

  <p class="description">Crazy demon art by Felix Blackmon</p>
</main>

<style>
  .description {
    color: #888;
  }
</style>
