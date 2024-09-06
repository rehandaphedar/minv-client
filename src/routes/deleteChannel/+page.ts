import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import user from '$lib/stores/user';

export const load = async () => {
	let _user = get(user) as any;
	if (browser && !_user['authenticated']) {
		goto('/auth');
	}
};
