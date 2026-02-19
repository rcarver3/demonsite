<script lang="ts">
    import profilePic from "../assets/profile.webp";
    import twitterLogo from "../assets/twitter_icon.png";
    import blueskyLogo from "../assets/bluesky_icon.png";
    import toyhouseLogo from "../assets/toyhouse_icon.png";
    import vgenLogo from "../assets/vgen_icon.png";
</script>

<img src={profilePic} class="logo profile" alt="Demonically Online" />
<h1>Demonically Online</h1>
<a href="https://x.com/demoniclyonline" target="_blank" rel="noreferrer">
    <figure>
        <img src={twitterLogo} class="logo" alt="Twitter Logo" />
        <figcaption>Twitter</figcaption>
    </figure>
</a>
<a href="https://bsky.app/profile/demonically-online.bsky.social" target="_blank" rel="noreferrer">
    <figure>
        <img src={blueskyLogo} class="logo" alt="Bluesky Logo" />
        <figcaption>Bluesky</figcaption>
    </figure>
</a>
<a href="https://toyhou.se/demonically_online" target="_blank" rel="noreferrer">
    <figure>
        <img src={toyhouseLogo} class="logo" alt="Toyhouse Logo" />
        <figcaption>Toyhouse</figcaption>
    </figure>
</a>
<a href="https://vgen.co/demonically_online" target="_blank" rel="noreferrer">
    <figure>
        <img src={vgenLogo} class="logo" alt="VGen Logo" />
        <figcaption>VGen</figcaption>
    </figure>
</a>

<style>
    a {
        display: inline-flex;
        flex-direction: column;
        text-decoration: none;
        padding: 0;
    }
    .logo {
        height: 8em;
        will-change: transform;
        transition: transform 300ms ease-in-out;
        &:hover {
            transform: scale(1.5, 1.5);
        }
    }
    .profile {
        animation: float 4s ease-in-out infinite;
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
