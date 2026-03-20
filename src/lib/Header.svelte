<script lang="ts">
    import profilePic from "$lib/icons/profile.png";
</script>

<div class="profile-container">
    <img src={profilePic} class="profile" alt="Demonically Online" />
    <h1>Demonically Online</h1>
</div>

<style>
    .profile {
        max-height: 10em;
        animation: float 4s ease-in-out infinite;
    }
    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
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
