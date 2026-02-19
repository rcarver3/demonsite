<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<p>Press to love Felix!</p>
<button onclick={increment}>
  Felix love is {count}
</button>
