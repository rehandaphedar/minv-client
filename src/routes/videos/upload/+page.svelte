<script lang="ts">
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import { Button, Heading, Input, P, Progressbar, Textarea } from 'flowbite-svelte';

	let title: string, description: string, files: FileList;
	let error: string;
	let progress_value: number, progress_max: number;

	const handleSubmit = async () => {
		if (title && description && files && files.length > 0) {
			error = '';
			progress_value = 0;
			progress_max = 0;

			const formData = new FormData();
			formData.append('minv--video', files[0]);
			formData.append('minv--data', JSON.stringify({ title, description }));

			let request = new XMLHttpRequest();
			request.withCredentials = true;
			request.open('POST', `${$apiURI}/videos`);

			request.upload.addEventListener('progress', function (e) {
				progress_value = e.loaded;
				progress_max = e.total;
			});

			request.addEventListener('load', async () => {
				const res = JSON.parse(request.response);
				if (request.status != 200) {
					error = res['message'];
					return;
				}
				goto(`/video/${res['slug']}`);
			});

			request.send(formData);
		} else {
			error = 'Please fill out all the fields';
		}
	};
</script>

<svelte:head>
	<title>Upload a Video | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">Upload a Video</Heading>

{#if error}
	<P>
		{error}
	</P>
{/if}

<form class="flex flex-col gap-4 my-8">
	<Input type="text" placeholder="Title" bind:value={title} />
	<Textarea placeholder="Description" bind:value={description} class="h-[40vh]" />
	<input
		type="file"
		accept="video/*"
		bind:files
		class="block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-5 text-sm"
	/>
	{#if progress_max}
		<P>
			{#if progress_value == progress_max}
				Processing...
			{:else}
				Uploading...
			{/if}
		</P>
		<Progressbar value={progress_value} max={progress_max}>Progress</Progressbar>
	{/if}
</form>
<Button on:click={handleSubmit} outline color="blue">Upload</Button>
