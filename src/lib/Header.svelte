<script lang="ts">
    import profilePic from "$lib/icons/profile.png";
</script>

<div class="header">
    <a href="/" class="logo">
        <img src={profilePic} class="logo" alt="Demonically Online" />
    </a>
    <a href="/" class="title">
        Demonically Online
    </a>
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
    }
    .header a {
        height: fit-content;
    }
    .logo {
        flex: 1 3 auto;
        animation: float 4s ease-in-out infinite;
    }
    .title {
        font-weight: bold;
        font-size: xx-large;
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
