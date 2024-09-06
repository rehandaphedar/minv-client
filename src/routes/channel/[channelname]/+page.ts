import { redirect, type LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import apiURI from '$lib/stores/apiURI';

export const load = async ({ params, fetch }: LoadEvent) => {
	const res1 = await fetch(`${get(apiURI)}/videos/byChannel/${params.channelname}`);
	const videos = await res1.json();

	const res2 = await fetch(`${get(apiURI)}/channel/${params.channelname}`);
	const channel = await res2.json();

	if (channel['error']) {
		throw redirect(307, '/channels');
	}

	return { videos, channel };
};
