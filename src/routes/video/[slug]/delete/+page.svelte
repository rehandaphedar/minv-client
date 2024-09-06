<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import { formatDate } from '$lib/utils';
	import { Button, Heading, P } from 'flowbite-svelte';

	export let data: any;

	const deleteVideo = async () => {
		await fetch(`${$apiURI}/video/${data['video']['slug']}`, {
			method: 'DELETE',
			credentials: 'include'
		});
		await goto('/videos', { replaceState: true });
	};
</script>

<svelte:head>
	<title>Delete Video | minv</title>
</svelte:head>

{#if browser}
	<Heading tag="h1" class="text-center my-8">Delete Video</Heading>
	<P>
		Are you sure you want to delete your video titled {data['video']['title']} at
		<code>/{data['video']['slug']}</code>, uploaded on {formatDate(data['video']['uploaded'])}?
	</P>
	<Button on:click={deleteVideo} outline color="red">Yes</Button>
{/if}
