<script lang="ts">
	import concatClasses from "../functions/concatClasses";

	export let title: string;
	export let className = "";
</script>

<section class={concatClasses([className, className])} {...$$props}>
	<h2>{title}</h2>
	<slot />
</section>
