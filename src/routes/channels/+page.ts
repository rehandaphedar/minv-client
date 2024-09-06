import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import apiURI from '$lib/stores/apiURI';

export const load = async ({ fetch }: LoadEvent) => {
	const res = await fetch(`${get(apiURI)}/channels`);
	const channels = await res.json();
	return { channels };
};
