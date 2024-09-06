import { browser } from '$app/environment';
import { get } from 'svelte/store';
import apiURI from '$lib/stores/apiURI';
import { goto } from '$app/navigation';
import type { LoadEvent } from '@sveltejs/kit';
import user from '$lib/stores/user';

export const load = async ({ params, fetch }: LoadEvent) => {
	const videoRes = await fetch(`${get(apiURI)}/video/${params.slug}`);
	const video = await videoRes.json();

	if (browser) {
		let _user = get(user) as any;
		if (!_user['authenticated'] || _user['user']['channelname'] != video['uploader']) {
			goto('/auth');
		}
	}

	return { video };
};
