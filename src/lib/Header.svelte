<script lang="ts">
    import profilePic from "../assets/profile.png";
    import twitterLogo from "../assets/twitter_icon.png";
    import blueskyLogo from "../assets/bluesky_icon.png";
    import toyhouseLogo from "../assets/toyhouse_icon.png";
    import vgenLogo from "../assets/vgen_icon.png";
</script>

<img src={profilePic} class="profile" alt="Demonically Online" />
<h1>Demonically Online</h1>
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
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.25em;
    }
    figure {
        margin: 0;
        flex-shrink: 1;
    }
    a {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    .logo {
        max-height: 8em;
        padding: 1.5em;
        will-change: transform;
        transition: transform 300ms ease-in-out;
        &:hover {
            transform: scale(1.5, 1.5);
        }
    }
    .profile {
        max-height: 10em;
        animation: float 4s ease-in-out infinite;
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
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
