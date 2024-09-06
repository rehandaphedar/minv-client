import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import apiURI from './apiURI';

let tmp: any = { authenticated: false };

const res = await fetch(`${get(apiURI)}/channel`, { credentials: 'include' });
if (res.status == 200) {
	const json = await res.json();
	tmp = { authenticated: true, user: json };
}

const user: any = writable(tmp);
export default user;
