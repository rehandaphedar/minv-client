<script lang="ts">
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import { Button, Heading, Input, P, Textarea } from 'flowbite-svelte';

	export let data: any;

	let title = data['video']['title'];
	let description = data['video']['description'];
	let error: string;

	const handleSubmit = async () => {
		if (title && description) {
			error = '';

			await fetch(`${$apiURI}/video/${data['video']['slug']}`, {
				method: 'PUT',
				body: JSON.stringify({ title, description }),
				credentials: 'include'
			});
			await goto(`/video/${data['video']['slug']}`, { replaceState: true });
		} else {
			error = 'Please fill out all the fields';
		}
	};
</script>

<svelte:head>
	<title>Edit Video | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">Edit Video</Heading>

{#if error}
	<P>
		{error}
	</P>
{/if}

<P>Note: Editing the title will not change the slug/URL of the video.</P>

<form class="flex flex-col gap-4 my-8">
	<Input type="text" placeholder="Title" bind:value={title} />
	<Textarea placeholder="Description" bind:value={description} class="h-[40vh]" />
</form>
<Button on:click={handleSubmit} outline color="blue">Edit</Button>
