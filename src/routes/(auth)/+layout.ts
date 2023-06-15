import { redirect } from '@sveltejs/kit';
import user from '../../user'
import { get } from 'svelte/store';

export function load() {
    let usr = get(user);
    let isLoggedIn = usr == "no_user" ? false : true;
    console.log("is logged in", isLoggedIn)
	if (!isLoggedIn) throw redirect(303, '/login');
}