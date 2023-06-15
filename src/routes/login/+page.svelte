<script lang=ts>
	import Login from './Login.svelte';

    let infos: any;

    let login: any;
    let new_account: any;
    let anonym_login: any;

	function login42 (){
		window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-cb92b4ad3a2b70b10bdd3629be0f67128c2bb6c04dc73afecc93393f9b433ffa&redirect_uri=http%3A%2F%2Flocalhost%3A4242&response_type=code";
	}

</script>


<div class="container">
	<div>
		<button class="button" on:click={login42}>
			Login With 42 Intra
		</button>
	</div>
	<div>
		<button class="button" on:click={new_account}>
			Create Account
		</button>
	</div>
	<div>
		<button class="button" on:click={() => {infos = "what"}}>
			Login Account
		</button>
	</div>
	<div>
		<button class="button" on:click={anonym_login}>
			Join As Anonymous
		</button>
	</div>
</div>
{#if infos == "what"}
	<Login />
{/if}


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        z-index: 10;
    }
</style>