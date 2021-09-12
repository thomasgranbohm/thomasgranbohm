<script lang="ts">
	export let title: string;
</script>

<section {...$$props}>
	<h2>{title}</h2>
	<slot />
</section>
