import { writable } from 'svelte/store';

const user = writable("no_user");

export default user;