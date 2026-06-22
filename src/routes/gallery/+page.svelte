<script lang="ts">
    let { data } = $props();
</script>

<h2 style="text-align: center">Art Gallery</h2>

<div class="image-gallery">
    {#each data.artUrls as artwork}
        <img src={artwork.src} alt={artwork.alt} />
    {/each}
</div>

<style>
    .image-gallery {
        display: flex;
        flex-flow: row wrap;
        margin: 1rem;
    }

    .image-gallery img {
        width: 50%;
        margin: auto;
        padding: 0.25em;
        object-fit: contain;
    }
</style>
