<script lang="ts">
	import { goto } from '$app/navigation';
	import apiURI from '$lib/stores/apiURI';
	import user from '$lib/stores/user';
	import { Button, Heading, Input, P } from 'flowbite-svelte';

	let channelname: string, password: string;
	$: error = '';

	const handleSubmit = async () => {
		const res = await fetch(`${$apiURI}/auth`, {
			method: 'POST',
			body: JSON.stringify({
				channelname,
				password
			}),
			credentials: 'include'
		});
		const data = await res.json();
		if (res.status == 200) {
			user.set({ authenticated: true, user: data });
			goto('/', { replaceState: true });
		} else {
			error = data.error;
		}
	};
</script>

<svelte:head>
	<title>Auth | minv</title>
</svelte:head>

<Heading tag="h1" class="text-center my-8">Auth</Heading>

{#if error}
	<P>
		{error}
	</P>
{/if}

<form class="flex flex-col gap-4 my-8">
	<Input type="text" placeholder="channelname" bind:value={channelname} />
	<Input type="password" placeholder="password" bind:value={password} />
</form>
<Button on:click={handleSubmit} outline color="blue">Authenticate</Button>
