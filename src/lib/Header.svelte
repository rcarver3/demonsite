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
        <a href="/commissions">Commisions</a>
        <a href="/about">About</a>
    </nav>
</div>

<style>
    .header a {
        color: #6f9ceb;
    }

    img {
        width: 50vw;
    }
    nav {
        display: flex;
        margin: 0.5rem 1rem;
    }

    nav a {
        flex: 1;
        font-size: 1.4rem;
        text-align: center;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo {
        animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
