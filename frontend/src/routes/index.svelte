<script context="module">
	export async function load() {
		const data = await getHomePage();
		return {
			props: data
		};
	}
</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sections from '$lib/components/Sections.svelte';
	import { getHomePage } from '$lib/utils/api';

	export let footer, headshot, sections, title;
</script>

<main>
	<Header {headshot} {title} />
	<article>
		<Sections {sections} />
	</article>
	<Footer text={footer} />
</main>
