<script lang="ts">
    import profilePic from "$lib/icons/profile.png";
</script>

<div class="header">
    <a href="/" class="logo">
        <img src={profilePic} class="logo" alt="Demonically Online" />
    </a>
    <a href="/" class="title"> Demonically Online </a>
</div>

<div class="navbar">
    <nav>
        <a href="/gallery">Gallery</a>
        <a href="/commissions">Commision</a>
        <a href="/about">About</a>
    </nav>
</div>

<style>
    .header a {
        color: #6f9ceb;
    }

    img {
        max-width: 100%;
    }
    nav {
        display: flex;
        margin: 0.5rem 1rem;
        justify-content: space-between;
    }

    nav a {
        font-size: 1.4rem;
        text-align: center;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .logo {
        animation: float 4s ease-in-out infinite;
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
