<script lang="ts">
	import concatClasses from '../functions/concatClasses';

	export let content: string;
	export let fillColor: string = undefined;
	export let focus: boolean = false;
	export let title: string;
	export let viewBox: string = undefined;
</script>

<svg
	class={concatClasses('icon', ['focus', focus])}
	fill={fillColor}
	viewBox={viewBox || '0 0 24 24'}
	tabIndex={!focus ? 0 : undefined}
	height={24}
	width={24}
	{...$$props}
>
	<title>{title}</title>
	<path d={content} />
</svg>

<style lang="scss">
	@import '../../styles/includes';

	.icon {
		height: 3rem;
		width: 3rem;

		flex-shrink: 0;

		transition: fill 0.2s;

		scroll-snap-align: start;

		&:not([fill]),
		&.focus:not([fill]),
		&:hover:not([fill]) {
			fill: $text;
		}
	}
</style>
