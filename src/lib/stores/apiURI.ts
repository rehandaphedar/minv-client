import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let tmp: any = '';

if (browser) {
	const res = await fetch('/env.json');
	const env = await res.json();
	tmp = env['API_SERVER_URI'] || 'http://localhost:8001';
} else {
	tmp = process.env['API_SERVER_URI'] || 'http://localhost:8001';
}

const apiURI = writable(tmp);
export default apiURI;
