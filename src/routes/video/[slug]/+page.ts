import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import apiURI from '$lib/stores/apiURI';

export const load = async ({ params, fetch }: LoadEvent) => {
	const res = await fetch(`${get(apiURI)}/video/${params.slug}`);
	const video = await res.json();
	return { video };
};
