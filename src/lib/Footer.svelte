<script lang="ts">
    import { resolve } from "$app/paths";
    let twitterLogo = resolve("/icons/twitter_icon.png");
    let blueskyLogo = resolve("/icons/bluesky_icon.png");
    let toyhouseLogo = resolve("/icons/toyhouse_icon.png");
    let vgenLogo = resolve("/icons/vgen_icon.png");
</script>

<div class="container">
    <a href="https://x.com/demoniclyonline" target="_blank" rel="noreferrer">
        <figure>
            <img src={twitterLogo} class="logo" alt="Twitter Logo" />
            <figcaption>Twitter</figcaption>
        </figure>
    </a>
    <a
        href="https://bsky.app/profile/demonically-online.bsky.social"
        target="_blank"
        rel="noreferrer"
    >
        <figure>
            <img src={blueskyLogo} class="logo" alt="Bluesky Logo" />
            <figcaption>Bluesky</figcaption>
        </figure>
    </a>
    <a
        href="https://toyhou.se/demonically_online"
        target="_blank"
        rel="noreferrer"
    >
        <figure>
            <img src={toyhouseLogo} class="logo" alt="Toyhouse Logo" />
            <figcaption>Toyhouse</figcaption>
        </figure>
    </a>
    <a
        href="https://vgen.co/demonically_online"
        target="_blank"
        rel="noreferrer"
    >
        <figure>
            <img src={vgenLogo} class="logo" alt="VGen Logo" />
            <figcaption>VGen</figcaption>
        </figure>
    </a>
</div>

<style>
    a {
        float: left;
        text-align: center;
        font-size: 1rem;
        width: 25%;
    }

    figure {
        margin: 0;
        padding: 1rem;
    }

    img {
        max-width: 100%;
    }

    figcaption {
        padding: 0.25rem 0;
    }

    .container {
        display: contents;
    }

    .logo {
        transition: transform 300ms ease-in-out;
        &:hover {
            transform: scale(1.75, 1.75);
        }
    }
</style>
