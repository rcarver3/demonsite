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

<div class="promo">Commissions come with a free bonus sketch during TFF!</div>

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

<style>
    .promo {
        text-align: center;
        margin: 0.5rem 1rem 1.5rem;
        padding: 0.75rem;
        background-color: #bfd5d3;
        color: #4a306d;
    }
    .embla {
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
        margin: 1.5rem 0.5rem;
    }

    .embla__prev,
    .embla__next {
        opacity: 0.5;
        border: 0;
        padding: 0;
        margin: 0.5rem;
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
