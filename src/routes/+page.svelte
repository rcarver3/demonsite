<script lang="ts">
    let { data } = $props();

    if (data.loc != null) {
        window.clarity("set", "loc", data.loc);
    }
    if (data.type != null) {
        window.clarity("set", "type", data.type);
    }

    import type {
        EmblaCarouselType,
        EmblaOptionsType,
        EmblaPluginType,
    } from "embla-carousel";
    import useEmblaCarousel from "embla-carousel-svelte";
    import Autoplay from "embla-carousel-autoplay";

    let emblaApi: EmblaCarouselType;
    let options: EmblaOptionsType = { loop: true };
    let scrollSnaps: number[] = $state([]);
    let selectedSnap = $state(0);

    const plugins: EmblaPluginType[] = [Autoplay()];

    const scrollTo = (index: number) => emblaApi?.scrollTo(index);

    const setupSnaps = (emblaApi: EmblaCarouselType) =>
        (scrollSnaps = emblaApi.scrollSnapList());

    const setActiveSnap = (emblaApi: EmblaCarouselType) =>
        (selectedSnap = emblaApi.selectedScrollSnap());

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    const onInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;

        setupSnaps(emblaApi);
        setActiveSnap(emblaApi);

        emblaApi.on("reInit", setupSnaps);
        emblaApi.on("reInit", setActiveSnap);
        emblaApi.on("select", setActiveSnap);
    };
</script>

<!--
<div class="promo">Commissions come with a free bonus sketch during TFF!</div>
-->

<div class="embla">
    <div
        class="embla__viewport"
        onemblaInit={onInit}
        use:useEmblaCarousel={{ options, plugins }}
    >
        <div class="embla__container">
            {#each data.splitArt as src}
                <div class="embla__slide">
                    <div class="embla__slide__inner">
                        <div class="image_holder">
                            <img {src} alt="Art Carousel" />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="embla__dots">
        <button class="embla__prev" onclick={goToPrev}> &lt; </button>
        {#each scrollSnaps as _, index}
            <button
                class="embla__dot"
                class:embla__dot--selected={index === selectedSnap}
                onclick={() => scrollTo(index)}
                title="Navigation for carousel"
            >
            </button>
        {/each}
        <button class="embla__next" onclick={goToNext}>&gt;</button>
    </div>
</div>

<style>
    .embla {
        margin: 1rem 0;
        --slide-size: 80%;
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
        margin: auto;
    }

    .embla__slide__inner {
        user-select: none;
        backface-visibility: hidden;
    }

    .embla__slide__inner img {
        display: block;
        width: 100%;
    }

    .embla__dots {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
    }

    .embla__prev,
    .embla__next {
        opacity: 0.5;
        border: 0;
        padding: 0;
        margin: 0;
        width: 1.5rem;
        height: 1.5rem;

        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
    }

    .embla__prev:hover,
    .embla__next:hover,
    .embla__dot:hover {
        opacity: 1;
    }

    .embla__dot {
        opacity: 0.5;
        appearance: none;
        background-color: transparent;
        display: inline-flex;
        text-decoration: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        margin: 0;
        width: 1rem;
        height: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
    }

    .embla__dot:before,
    .embla__dot:after {
        width: 0.5rem;
        height: 0.5rem;

        border-radius: 50%;
        position: absolute;
        display: flex;
        align-items: center;
        content: "";
    }

    .embla__dot:before {
        border: 0.1rem solid #6f9ceb;
    }

    .embla__dot:after {
        border: 0.25rem solid #918ef4;
        opacity: 0;
    }

    .embla__dot--selected:after {
        opacity: 1;
    }
</style>
