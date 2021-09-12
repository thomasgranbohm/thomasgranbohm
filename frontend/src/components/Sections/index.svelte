<script lang="ts">
	import ContactSection from "./ContactSection.svelte";
	import IconSection from "./IconSection.svelte";
	import TextSection from "./TextSection.svelte";

	export let sections;
</script>

{#each sections as section}
	{#if sections.__component === "sections.text-section"}
		<TextSection title={section["title"]} text={section["text"]} />
	{:else if sections.__component === "sections.icon-section"}
		<IconSection
			icons={section["icons"]}
			title={section["title"]}
			scroll={section["scroll"]}
		/>
	{:else if sections.__component === "sections.contact-info"}
		<ContactSection contacts={section["contacts"]} />
	{/if}
{/each}
