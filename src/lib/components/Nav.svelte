<script lang="ts">
	import user from '$lib/stores/user';
	import { DarkMode, Img, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';

	let btnClass: string =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5';
</script>

<Navbar let:hidden let:toggle navClass="px-2 sm:px-4 py-2.5 w-full">
	<NavBrand href="/"><Img src="/favicon.png" alt="minv" class="w-[32px] h-[32px]" /></NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/videos">Videos</NavLi>
		<NavLi href="/channels">Channels</NavLi>

		{#if !$user['authenticated']}
			<NavLi href="/auth">Authenticate</NavLi>
		{:else}
			<NavLi href="/logout">Logout</NavLi>
		{/if}
	</NavUl>
	<DarkMode {btnClass} />
</Navbar>
