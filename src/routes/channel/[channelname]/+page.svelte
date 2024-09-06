<script lang="ts">
	import Video from '$lib/components/Video.svelte';
	import apiURI from '$lib/stores/apiURI';
	import { formatDate } from '$lib/utils';
	import user from '$lib/stores/user';
	import { A, Button, ButtonGroup, Heading, Secondary } from 'flowbite-svelte';
	export let data: any;
	const videos = data['videos'];
	const channel = data['channel'];
</script>

<svelte:head>
	<title>{channel['channelname']} | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">
	{channel['channelname']}'s Videos
	<A href="{$apiURI}/channel/{channel['channelname']}.atom">Feed</A>
	<br />
	<Secondary>
		Created on {formatDate(channel['created'])}
	</Secondary>
</Heading>

{#if $user['authenticated'] && $user['user']['channelname'] == channel['channelname']}
	<ButtonGroup class="mb-8">
		<Button href="/deleteChannel" outline color="red">Delete channel</Button>
	</ButtonGroup>
{/if}

<section class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
	{#each videos as video}
		<Video {video} />
	{/each}
</section>
