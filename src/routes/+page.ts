// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
//export const prerender = true;

import { redirect } from '@sveltejs/kit';
import user from '../user'
import { get } from 'svelte/store';

export const ssr = false;

export function load() {
    let usr = get(user);
    let isLoggedIn = usr == "no_user" ? false : true;
    console.log(isLoggedIn)
	if (!isLoggedIn) throw redirect(303, '/login');
}