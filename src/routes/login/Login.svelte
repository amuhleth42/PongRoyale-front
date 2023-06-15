<script>
    /*import { get, status } from "../Database";
    import { setCookies } from "../Cookies";
	import { sha256 } from 'js-sha256';*/

    import user from '../../user'
    
	var username = '';
	var password = '';
	var err = '';
	
    async function login()
	{
		var response = await get("users/login", {
			"username": username,
			"password": sha256(password),
		})
		if (response.status == status.OK)
		{
			err = "";
			setCookies("USER_TOKEN", response.token);
		}
		else if (response.status == status.INVALID_USERNAME)
		{
			err = "invalid username";
		}
		else if (response.status == status.INVALID_PASSWORD)
		{
			err = "invalid password";
		}
		console.log(response);
	}


    /*const login = () => {
        fetch('url/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username:username, password:password})
        })
        .then((res) => {
            if (res.status < 299) return res.json();
            else currError = "Login POST Error";
        })
        .then((data) => {
            if (data) user.update((val) => val = {...data});
        })
        .catch ((error) => {
            currError = error;
            console.log("Error logging in: ", error);
        })

    };*/

</script>

<form on:submit|preventDefault={login}>

    <div>
        <label for="username">Username :</label>
        <input type="text" id="username" bind:value={username}/>
    </div>
    <div>
        <label for="password">Password :</label>
        <input type="password" id="password" bind:value={password}/>
    </div>
    <button type="submit">Login</button>

</form>