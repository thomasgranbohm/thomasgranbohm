<script lang="ts">
	import ContactInfo from "../ContactInfo.svelte";
	import Section from "../Section.svelte";
	export let contacts;
</script>

<Section title="Contact me">
	<ContactInfo {contacts} />
</Section>
