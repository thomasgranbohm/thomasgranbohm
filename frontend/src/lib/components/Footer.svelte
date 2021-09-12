<script lang="ts">
	import Anchor from './Anchor.svelte';

	export let text: string;
</script>

<footer class="footer">
	<p>
		{text}
	</p>
	<p>
		Built using <Anchor href="https://svelte.dev"><b>Svelte</b></Anchor> and
		<Anchor href="https://strapi.io"><b>Strapi</b></Anchor>
	</p>
</footer>

<style lang="scss">
	@import '../../styles/includes.scss';

	.footer {
		color: $text;

		text-align: center;

		font-size: 14px;

		margin-block-start: 2rem;
	}
</style>
