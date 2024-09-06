import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import apiURI from '$lib/stores/apiURI';

export const load = async ({ fetch }: LoadEvent) => {
	const res = await fetch(`${get(apiURI)}/videos`);
	const videos = await res.json();
	return { videos };
};
