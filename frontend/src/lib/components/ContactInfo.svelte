<script lang="ts">
	import concatClasses from '../functions/concatClasses';
	import Anchor from './Anchor.svelte';
	import ChildWithPrefix from './ChildWithPrefix.svelte';

	export let className = '';
	export let contacts: [
		{
			text: string;
			type: 'discord' | 'email' | 'phone';
		}
	];
</script>

<address class={concatClasses([['contact-info'], true], [className, className])}>
	{#each contacts as contact}
		<ChildWithPrefix prefix={contact.type}>
			{#if contact.type === 'discord'}
				<p tabIndex={0}>{contact.text}</p>
			{:else if contact.type === 'email'}
				<Anchor href={`mailto:${contact.text}`}>{contact.text}</Anchor>
			{:else if contact.type === 'phone'}
				<Anchor href={`tel:${contact.text.split(/[\s,-]+/g).join('')}`}>
					{contact.text}
				</Anchor>
			{/if}
		</ChildWithPrefix>
	{/each}
</address>

<style lang="scss">
	@import '../../styles/includes';

	.contact-info {
		margin-block-start: 0.5em;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-evenly;
		gap: 0.5rem;
	}
</style>
