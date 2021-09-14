<ul class="unordered-list" {...$$props}>
	<slot />
</ul>

<style lang="scss">
	@import '../../styles/includes';

	.unordered-list {
		margin-inline-start: 1.5rem;
		margin-block-start: 0.5em;
	}
</style>
