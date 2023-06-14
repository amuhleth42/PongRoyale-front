<script lang="ts">
    export let size: number;
    export let src: string;

    $: console.log(src);
</script>

<div class="container" style="border-radius: {10}">
    <img class="avatar" width={size} height={size} {src} alt='' />
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .avatar {
        border-radius: 50%;
        border: 2px solid black;
    } 
</style>