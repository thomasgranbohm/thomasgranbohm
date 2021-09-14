<script lang="ts">
	import { getStrapiMedia } from '$lib/utils/media';
	import Image from './Image.svelte';

	export let headshot: {
		formats: {
			medium: {
				url: string;
				width: number;
			};
			small: {
				url: string;
				width: number;
			};
			thumbnail: {
				url: string;
				width: number;
			};
		};
		url: string;
		width: number;
	};
	export let title: string;

	let { formats, url, width: orgWidth } = headshot;
</script>

<header class="header">
	<img
		alt={title}
		class={'image'}
		src={getStrapiMedia(url)}
		srcSet={Object.values(formats)
			.map(({ url, width }) => `${getStrapiMedia(url)} ${width}w`)
			.join(', ')}
		sizes={`${Object.values(formats)
			.sort((a, b) => a.width - b.width)
			.map(({ width }, i, arr) => {
				const nextWidth = arr[i + 1]?.width || orgWidth;
				return `(max-width: ${nextWidth}px) ${width}px`;
			})
			.join(', ')}, ${orgWidth}px`}
	/>
	<h1 class={'title'}>
		{title}
	</h1>
</header>

<style lang="scss">
	@import '../../styles/includes';

	.header {
		display: grid;
		gap: 0 0.5em;
		grid-template-columns: 1fr auto;
		grid-template-areas: 'title image';

		margin-bottom: 1rem;
	}

	.image {
		grid-area: image;

		align-self: center;
		object-fit: contain;

		max-width: 128px;
		max-height: 128px;
		width: 100%;
		height: 100%;
	}

	.title {
		grid-area: title;

		margin: 0;

		align-self: center;

		word-break: normal;
	}
</style>
