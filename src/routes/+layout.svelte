<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<header>
	<Nav />
</header>

<main>
	<slot />
</main>
