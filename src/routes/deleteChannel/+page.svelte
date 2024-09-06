<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import user from '$lib/stores/user';
	import { formatDate } from '$lib/utils';
	import { Button, Heading, P } from 'flowbite-svelte';

	const deleteChannel = async () => {
		await fetch(`${$apiURI}/channel`, { method: 'DELETE', credentials: 'include' });
		await goto('/logout', { replaceState: true });
	};
</script>

<svelte:head>
	<title>Delete your channel | minv</title>
</svelte:head>

{#if browser}
	<Heading tag="h1" class="text-center my-8">Delete your channel</Heading>
	<P>
		Are you sure you want to delete your channel {$user['user']['channelname']} created on {formatDate(
			$user['user']['created']
		)}?
	</P>
	<Button on:click={deleteChannel} outline color="red">Yes</Button>
{/if}
