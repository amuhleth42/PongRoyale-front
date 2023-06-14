<script lang=ts>
    import Avatar from "./Avatar.svelte";
</script>


<div class="container">
    <div class="left">
        <a class="logo" href="/">@Pong(Royale)</a>
    </div>
    <div class="right">
        <a href="/game">Play Game!</a>
        <a href="/chat">Chat</a>
        <Avatar size={40} src={"./favicon.png"}/>
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
        border-bottom: 2px solid black;
    }

    .logo {
        font-size: 38px;
        font-weight: 700;
    }
</style>
