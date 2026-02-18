<script lang="ts">
    import profilePic from "../assets/profile.webp";
    import twitterLogo from "../assets/twitter.svg";
    import blueskyLogo from "../assets/bluesky.png";
    import toyhouseLogo from "../assets/toyhouse.svg";
    import vgenLogo from "../assets/vgen.png";
</script>

<img src={profilePic} class="logo profile" alt="Demonically Online" />
<h1>Demonically Online</h1>

<div>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitterLogo} class="logo twitter" alt="Twitter Logo" />
    </a>
    <a href="https://bsky.app" target="_blank" rel="noreferrer">
        <img src={blueskyLogo} class="logo bluesky" alt="Bluesky Logo" />
    </a>
    <a href="https://toyhou.se" target="_blank" rel="noreferrer">
        <img src={toyhouseLogo} class="logo toyhouse" alt="Toyhouse Logo" />
    </a>
    <a href="https://vgen.co" target="_blank" rel="noreferrer">
        <img src={vgenLogo} class="logo vgen" alt="VGen Logo" />
    </a>
</div>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo.profile:hover {
        filter: drop-shadow(0 0 2em #bf6be8);
    }
    .logo.twitter:hover {
        filter: drop-shadow(0 0 2em #1d9bf0);
    }
    .logo.bluesky:hover {
        filter: drop-shadow(0 0 2em #6eaafd);
    }
    .logo.toyhouse:hover {
        filter: drop-shadow(0 0 2em #ffffff);
    }
    .logo.vgen:hover {
        filter: drop-shadow(0 0 2em #b8ff26);
    }
</style>
