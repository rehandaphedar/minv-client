<script lang="ts">
	import user from '$lib/stores/user';
	import { Heading } from 'flowbite-svelte';
	import CustomCard from '$lib/components/Custom/CustomCard.svelte';
</script>

<svelte:head>
	<title>minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">minv</Heading>
<section class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
	{#if !$user['authenticated']}
		<CustomCard href="/videos">Explore Videos</CustomCard>
		<CustomCard href="/channels">Explore Channels</CustomCard>
		<CustomCard href="/auth">Authenticate</CustomCard>
	{:else}
		<CustomCard href="/videos/upload">Upload a Video</CustomCard>
		<CustomCard href="/logout">Logout</CustomCard>
		<CustomCard href="/deleteChannel">Delete your channel</CustomCard>
	{/if}
</section>
