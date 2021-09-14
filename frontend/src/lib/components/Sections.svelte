<script lang="ts">
	import ContactSection from './Sections/ContactSection.svelte';
	import IconSection from './Sections/IconSection.svelte';
	import TextSection from './Sections/TextSection.svelte';

	export let sections;
</script>

{#each sections as section}
	{#if section['__component'] === 'sections.text-section'}
		<TextSection title={section['title']} text={section['text']} />
	{:else if section['__component'] === 'sections.icon-section'}
		<IconSection icons={section['icons']} title={section['title']} scroll={section['scroll']} />
	{:else if section['__component'] === 'sections.contact-info'}
		<ContactSection contacts={section['contacts']} />
	{/if}
{/each}
