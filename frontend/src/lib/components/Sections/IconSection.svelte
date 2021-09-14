<script lang="ts">
	import Icon from '../Icon.svelte';

	import IconLink from '../IconLink.svelte';
	import IconList from '../IconList.svelte';
	import Section from '../Section.svelte';

	export let title: string;
	export let scroll: boolean = false;
	export let icons: [
		{
			content: string;
			fill?: string;
			title: string;
			viewbox?: string;
			link?: string;
		}
	];
</script>

<Section {title}>
	<IconList {scroll}>
		{#each icons.sort((a, b) =>
			a.title.localeCompare(b.title)
		) as { content, fill, link, title, viewbox }}
			{#if link}
				<IconLink {content} href={link} {title} {viewbox} {fill} />
			{:else}
				<Icon {content} {title} {viewbox} {fill} />
			{/if}
		{/each}
	</IconList>
</Section>
