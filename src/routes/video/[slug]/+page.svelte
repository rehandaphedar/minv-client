<script lang="ts">
	import apiURI from '$lib/stores/apiURI';
	import user from '$lib/stores/user';
	import { formatDate } from '$lib/utils';
	import { A, Button, ButtonGroup, Heading, P, Secondary, Video } from 'flowbite-svelte';
	export let data: any;
	$: video = data['video'];
</script>

<svelte:head>
	<title>{video['title']} | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">
	{video['title']}
	<br />
	<Secondary>
		By <A href="/channel/{video['uploader']}">{video['uploader']}</A> on
		<time datetime={video['uploaded']}>{formatDate(video['uploaded'])}</time>
	</Secondary>
</Heading>

{#if video['processed'] == 0}
	<P>Video is being processed.</P>
{:else if video['processed'] == 1}
	<Video controls src={`${$apiURI}/static/${video['slug']}.mp4`} class="w-full rounded-md" />
{:else if video['processed'] == 2}
	<P>Error while processing video.</P>
{/if}

{#if $user['authenticated'] && video['uploader'] == $user['user']['channelname']}
	<ButtonGroup class="my-8">
		<Button href={`/video/${video['slug']}/edit`} outline color="blue">Edit Video</Button>
		<Button href={`/video/${video['slug']}/delete`} outline color="red">Delete Video</Button>
	</ButtonGroup>
{/if}

<P>
	{video['description']}
</P>
