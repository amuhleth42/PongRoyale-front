<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="app">
	<Header />

	<main class="main">
		<slot />
	</main>

	<Footer />

</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
		justify-content: space-between;
        height: 100vh;
    }
	.main {
		border: 2px solid black;
		border-radius: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		margin: 100px;
		min-height: 50%;
	}
</style>