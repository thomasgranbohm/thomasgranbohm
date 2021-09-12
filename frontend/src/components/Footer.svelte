<script lang="ts">
	import concatClasses from "../functions/concatClasses";

	export let text: string;
	export let className = "";
</script>

<footer class={concatClasses("footer", className)}>
	<p>
		{text} — {new Date().getFullYear()}
	</p>
</footer>

<style lang="scss">
	@import "../styles/includes.scss";

	.footer {
		color: $text;

		text-align: center;

		font-size: 14px;

		margin-block-start: 2rem;
	}
</style>
