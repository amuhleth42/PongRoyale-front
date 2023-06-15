<script>
    import Avatar from '$lib/Avatar.svelte';
	import { page } from '$app/stores';

    export let data;

    console.table(data.username);
    let user = {
        username: data.username,
        login: "login",
        bio: "ma bio",
        avatar_url: "ajkdfl"

    }
    console.log($page.route);
</script>

<p>{user.username}</p>
<p>{user.login}</p>
<Avatar src="{user.avatar_url}" size=40 />
<p>{user.bio}</p>
<form action="/#/edit">
	<input type="submit" value="edit">
</form>