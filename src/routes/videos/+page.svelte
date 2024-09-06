<script lang="ts">
	import apiURI from '$lib/stores/apiURI';
	import Video from '$lib/components/Video.svelte';
	import { A, Heading } from 'flowbite-svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Videos | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">Videos <A href="{$apiURI}/videos.atom">Feed</A></Heading>
<section class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
	{#each data['videos'] as video}
		<Video {video} />
	{/each}
</section>
