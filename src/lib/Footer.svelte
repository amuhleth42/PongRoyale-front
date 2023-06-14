<script lang="ts">
    import Avatar from '$lib/Avatar.svelte'
</script>

<div class="container">
    <div class="left">
        <p class="copyright">Copyright 2023</p>
    </div>
    <div class="right">
        <a>Terms & Conditions</a>
        <Avatar size={30} src={"./favicon.png"}/>
    </div>
</div>

<style>
    .container, .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .container {
        padding: 20px;
        border-top: 2px solid black;
    }
</style>