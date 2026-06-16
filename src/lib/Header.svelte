<script lang="ts">
    import { resolve } from "$app/paths";
    import profilePic from "$lib/icons/profile.png";
</script>

<div class="header">
    <a href={resolve("/")} class="logo">
        <img src={profilePic} class="logo" alt="Demonically Online" />
    </a>
    <a href={resolve("/")} class="title"> Demonically Online </a>
</div>

<style>
    .header a {
        color: #6f9ceb;
    }

    img {
        max-width: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .logo {
        flex: 1 1;
        margin: 0 0.25rem;
        animation: float 4s ease-in-out infinite;
    }
    .title {
        flex: 1 1 20%;
        margin: 0 1.5rem;
        font-size: 2rem;
        font-weight: bold;
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-1rem);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
