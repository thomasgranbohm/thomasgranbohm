<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import Anchor from "../Anchor.svelte";
	import Paragraph from "../Paragraph.svelte";
	import Section from "../Section.svelte";
	import UnorderedList from "../UnorderedList.svelte";

	export let title: string;
	export let text: string;
</script>

<Section {title}>
	<SvelteMarkdown
		source={text}
		renderers={{
			link: Anchor,
			paragraph: Paragraph,
			list: UnorderedList,
		}}
	/>
</Section>
