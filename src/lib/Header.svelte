<script lang="ts">
    import profilePic from "$lib/icons/profile.png";
</script>

<div class="header">
    <a href="/" class="logo">
        <img src={profilePic} class="logo" alt="Demonically Online" />
    </a>
    <a href="/" class="title"> Demonically Online </a>
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
