<script async lang="ts">
	import concatClasses from '../functions/concatClasses';

	export let href = '';
	export let noUnderline = false;
	export let className = '';
</script>

<a
	class={concatClasses('anchor', [className, className], ['underline', !noUnderline])}
	{href}
	rel="noopener noreferrer"
	target="_blank"
>
	<slot />
</a>

<style lang="scss">
	@import '../../styles/includes.scss';

	.anchor {
		color: $link;
		font-weight: 600;
		font-style: normal;

		text-decoration: none;

		position: relative;

		display: inline-block;

		&::selection {
			color: $link;
			background-color: $text;
		}

		&.underline {
			display: inline;

			text-decoration: underline;

			@media (min-width: #{$tablet-small}) {
				text-decoration: none;
				background-image: linear-gradient($link, $link),
					linear-gradient($background, $background);
				background-repeat: no-repeat;

				background-position-y: 90%, 0;
				background-position-x: 100%, 0;
				background-size: 0% 2px, 100% 100%;
				transition: background-size 0.2s;

				transition-timing-function: ease;

				&:hover,
				&:focus {
					background-position-x: 0%, 0;
					background-size: 100% 2px, 100% 100%;
				}
			}
		}
	}
</style>
