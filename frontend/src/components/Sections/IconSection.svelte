<script lang="ts">
	import Icon from "../Icon.svelte";

	import IconLink from "../IconLink.svelte";
	import IconList from "../IconList.svelte";
	import Section from "../Section.svelte";

	export let title: string;
	export let scroll: boolean = false;
	export let icons: [];
</script>

<Section {title}>
	<IconList {scroll}>
		{#each icons as { content, fill, link, title, viewbox }}
			{#if link}
				<IconLink {content} href={link} {title} {viewbox} {fill} />
			{:else}
				<Icon {content} {title} {viewbox} {fill} />
			{/if}
		{/each}
		<!-- {icons
			.sort((a, b) => (a.title as string).localeCompare(b.title as string))
			.map(({ content, title, fill, viewbox, link }) => {
				const props = {
					key: title,
					title: title,
					fillColor: fill,
					viewBox: viewbox,
					content: content,
				};
				if (link) {
					return <IconLink {...props} href={link} />;
				}
				return <Icon {...props} />;
			})} -->
	</IconList>
</Section>
