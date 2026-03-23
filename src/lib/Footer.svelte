<script lang="ts">
    import twitterLogo from "$lib/icons/twitter_icon.png";
    import blueskyLogo from "$lib/icons/bluesky_icon.png";
    import toyhouseLogo from "$lib/icons/toyhouse_icon.png";
    import vgenLogo from "$lib/icons/vgen_icon.png";
</script>

<div style="display: content">
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
        font-size: 1.0rem;
        width: 25%;
    }

    figure {
        margin: 0;
        padding: 1rem;
    }

    .logo {
        transition: transform 300ms ease-in-out;
        &:hover {
            transform: scale(1.75, 1.75);
        }
    }

</style>
