<script lang="ts">
    import twitterLogo from "$lib/icons/twitter_icon.png";
    import blueskyLogo from "$lib/icons/bluesky_icon.png";
    import toyhouseLogo from "$lib/icons/toyhouse_icon.png";
    import vgenLogo from "$lib/icons/vgen_icon.png";
</script>

<div class="logo-container">
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
    .logo-container {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.25em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    figure {
        margin: 0;
        flex-shrink: 1;
    }
    a {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
        text-decoration: inherit;
    }
    .logo {
        max-height: 8em;
        padding: 0.25em;
        will-change: transform;
        transition: transform 300ms ease-in-out;
        &:hover {
            transform: scale(1.5, 1.5);
        }
    }

    @media (max-width: 768px) {
        .logo {
            max-height: 6em;
            padding: 1em;
        }
    }

    @media (max-width: 480px) {
        .logo {
            max-height: 4em;
            padding: 0.5em;
        }
    }
</style>
