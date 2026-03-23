<script lang="ts">
    let { data } = $props();

    import type {
        EmblaCarouselType,
        EmblaOptionsType,
        EmblaPluginType,
    } from "embla-carousel";
    import useEmblaCarousel from "embla-carousel-svelte";

    let emblaApi: EmblaCarouselType;
    let options: EmblaOptionsType = { loop: true };
    let scrollSnaps: number[] = $state([]);
    let selectedSnap = $state(0);

    const plugins: EmblaPluginType[] = [];

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
                        <img {src} alt="Art Carousel" />
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
    .embla {
        max-width: 48rem;
        margin: auto;

        --slide-size: 75%;
        --slide-spacing: 1rem;
        --slide-height: 25rem;
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

    .embla__slide__inner {
        user-select: none;
        backface-visibility: hidden;
    }

    .embla__slide__inner img {
        display: block;
        height: var(--slide-height);
        width: 100%;
        object-fit: contain;
    }

    .embla__dots {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-right: calc((1.4rem - 0.7rem) / 2 * -1);
        margin: 0 0.5rem;
    }

    .embla__prev {
        padding: 0 1rem;
    }
    .embla__next {
        padding: 0 1rem;
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
        border: 0.1rem solid rgb(25, 25, 25);
    }

    .embla__dot:after {
        border: 0.25rem solid rgb(11, 51, 180);
        opacity: 0;
    }

    .embla__dot--selected:after {
        opacity: 1;
    }

    a {
        font-weight: 500;
        text-decoration: inherit;
    }
    .other-pages {
        text-align: center;
        font-size: 28px;
    }

    .other-pages a {
        font-weight: bold;
    }
</style>
