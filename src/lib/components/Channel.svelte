<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { P } from 'flowbite-svelte';
	import CustomCard from '$lib/components/Custom/CustomCard.svelte';
	export let channel: any;
</script>

<CustomCard href="/channel/{channel['channelname']}">
	<P color="text-gray-900 dark:text-white" class="break-words">
		{channel['channelname']}
	</P>
	<P color="text-gray-500 dark:text-gray-400">
		Created on <time datetime={channel['created']}>{formatDate(channel['created'])}</time>
	</P>
</CustomCard>
