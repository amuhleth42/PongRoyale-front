<script>
    import { redirect } from '@sveltejs/kit';


    import user from '../user';
    import { onMount } from 'svelte';

    $: isLoggedIn = $user == "no_user" ? false : true;

    const logout = () => {
        user.update(val => val = "no_user");
    }

    const fakeLogin = () => {
        let data = {
            yo: "hey"
        };
        //user.update(val => val = {...data});
        user.set("yo");
    }

    const toggleLogin = () => {
        if ($user == "no_user") {
            fakeLogin();
        }
        else {
            logout();
        }
        console.log("is logged in: ", {isLoggedIn});
    }

    /*onMount(() => {
        if (!isLoggedIn) throw redirect(303, '/login')

    })*/

</script>

<h1>Main page</h1>
{#if isLoggedIn}
    <p>You are logged in!</p>
    <button on:click={logout}>Logout</button>
{:else}
    <p>You are not logged in :s</p>
    <a href="/login">login</a>
{/if}

<button on:click={toggleLogin}>Toggle log in/out</button>
