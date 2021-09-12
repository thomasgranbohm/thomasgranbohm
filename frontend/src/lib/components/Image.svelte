<script lang="ts">
	import concatClasses from "../functions/concatClasses";
	import { getStrapiMedia } from "../utils/media";

	export let src: string;
	export let alt: string;
	export let className = "";
</script>

<img
	{alt}
	src={getStrapiMedia(src)}
	class={concatClasses([className, className])}
	{...$$props}
/>
