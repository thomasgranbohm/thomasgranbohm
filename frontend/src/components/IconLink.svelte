<script lang="ts">
	import Anchor from "./Anchor.svelte";
	import Icon from "./Icon.svelte";

	export let href: string;
	export let content: string;
	export let title: string;
</script>

<Anchor {href} noUnderline>
	<Icon {content} {title} {...$$props} />
</Anchor>
