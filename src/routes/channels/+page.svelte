<script lang="ts">
	import apiURI from '$lib/stores/apiURI';
	import Channel from '$lib/components/Channel.svelte';
	import { A, Heading } from 'flowbite-svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Channels | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8"
	>Channels <A href="{$apiURI}/channels.atom">Feed</A></Heading
>
<section class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
	{#each data['channels'] as channel}
		<Channel {channel} />
	{/each}
</section>
