<script lang="ts">
	import CustomCard from '$lib/components/Custom/CustomCard.svelte';
	import { formatDate, truncateString } from '$lib/utils';
	import { A, P } from 'flowbite-svelte';
	export let video: any;
</script>

<CustomCard href="/video/{video['slug']}">
	<P color="text-gray-900 dark:text-white" class="break-words">
		{video['title']}
	</P>
	<P color="text-gray-500 dark:text-gray-400">
		{truncateString(video['description'], 250)}
	</P>
	<P color="text-gray-500 dark:text-gray-400" class="mt-2">
		By <A href="/channel/{video['uploader']}">{video['uploader']}</A> on
		<time datetime={video['uploaded']}>{formatDate(video['uploaded'])}</time>
	</P>
</CustomCard>
