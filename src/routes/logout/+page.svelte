<script lang="ts">
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import user from '$lib/stores/user';
	import { Heading } from 'flowbite-svelte';

	const logout = async () => {
		await fetch(`${$apiURI}/logout`, { method: 'POST', credentials: 'include' });
		user.set({ authenticated: false });
		await goto('/', { replaceState: true });
	};
	logout();
</script>

<Heading tag="h1" class="text-center my-8">Logout</Heading>
