<script lang="ts">
    let { data } = $props();

    import profilePic from "$lib/icons/profile.png";
    import blueskyPic from "$lib/icons/bluesky_icon.png";
    import twitterPic from "$lib/icons/twitter_icon.png";
    import type {
        EmblaCarouselType,
        EmblaOptionsType,
        EmblaPluginType,
    } from "embla-carousel";
    import useEmblaCarousel from "embla-carousel-svelte";

    let emblaApi: EmblaCarouselType;
    let options: EmblaOptionsType = { loop: true };
    const plugins: EmblaPluginType[] = [];

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    const onInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;
    };
</script>

<div class="embla">
    <div
        class="embla__viewport"
        onemblaInit={onInit}
        use:useEmblaCarousel={{ options, plugins }}
    >
        <div class="embla__container">
            {#each data.artOutput as src}
                <div class="embla__slide">
                    <img {src} alt="Art Carousel" />
                </div>
            {/each}
        </div>
    </div>

    <div class="control-buttons">
        <button class="embla__prev" onclick={goToPrev}>Prev</button>
        <button class="embla__next" onclick={goToNext}>Next</button>
    </div>
</div>
<div class="other-pages">
    <div>
        <a href="/gallery"><h2>Art Gallery</h2></a>
    </div>
    <div>
        <a href="/about"><h2>About Me</h2></a>
    </div>
    <div>
        <a href="/commissions"><h2>Commisions Info</h2></a>
    </div>
</div>

<style>
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .embla {
        max-width: 30rem;
        margin: auto;
        --slide-size: 50%;
        --slide-spacing: 20px;
    }

    .embla__viewport {
        overflow: hidden;
    }

    .embla__container {
        display: flex;
        touch-action: pan-y pinch-zoom;
        margin-left: calc(var(--slide-spacing) * -1);
    }

    .embla__slide {
        flex: 0 0 var(--slide-size);
        min-width: 0;
        padding-left: var(--slide-spacing);
    }

    .control-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25em;
    }

    a {
        font-weight: 500;
        text-decoration: inherit;
    }
    .other-pages {
        text-align: center;
    }

    img {
        max-width: 15em;
    }
</style>
