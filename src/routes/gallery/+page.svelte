<script lang="ts">
    import profilePic from "$lib/assets/profile.png";
    import blueskyPic from "$lib/assets/bluesky_icon.png";
    import twitterPic from "$lib/assets/twitter_icon.png";
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

<h1 class="header">Art Gallery</h1>

<div class="embla">
    <div
        class="embla__viewport"
        onemblaInit={onInit}
        use:useEmblaCarousel={{ options, plugins }}
    >
        <div class="embla__container">
            <div class="embla__slide">
                <img src={profilePic} alt="Profile" />
            </div>
            <div class="embla__slide">
                <img src={blueskyPic} alt="Custom Bluesky Logo" />
            </div>
            <div class="embla__slide">
                <img src={twitterPic} alt="Custom Twitter Logo" />
            </div>
        </div>
    </div>

    <div class="control-buttons">
        <button class="embla__prev" onclick={goToPrev}>Prev</button>
        <button class="embla__next" onclick={goToNext}>Next</button>
    </div>
</div>

<style>
    .header {
        text-align: center;
    }

    .embla {
        display: block;
        width: 50%;
        margin: 0 auto;
    }

    .embla__viewport {
        overflow: hidden;
    }

    .embla__container {
        display: flex;
        touch-action: pan-y pinch-zoom;
    }

    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
    }

    .control-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25em;
    }

    img {
        max-width: 25em;
    }
</style>
