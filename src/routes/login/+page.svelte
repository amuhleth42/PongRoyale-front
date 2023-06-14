<script lang=ts>
    let infos: any;
    let login: any;
    let new_account: any;
    let anonym_login: any;
</script>


<div class="container">
	<div>
		<button class="button" on:click={login}>
			LOGIN WITH 42
		</button>
	</div>
	<div>
		<button class="button" on:click={new_account}>
			CREATE ACOUNT
		</button>
	</div>
	<div>
		<button class="button" on:click={() => {infos = "what"}}>
			LOGIN ACOUNT
		</button>
	</div>
	<div>
		<button class="button" on:click={anonym_login}>
			JOIN AS ANONYMOUS
		</button>
	</div>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        z-index: 10;
    }
</style>