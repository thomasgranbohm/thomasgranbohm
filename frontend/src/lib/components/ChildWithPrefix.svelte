<script lang="ts">
	import concatClasses from '../functions/concatClasses';

	export let prefix: 'discord' | 'email' | 'phone';
</script>

<div class={concatClasses('child-with-prefix', prefix)}>
	<slot />
</div>

<style lang="scss">
	@import '../../styles/includes.scss';

	.child-with-prefix {
		display: inline-flex;
		gap: 0.5em;

		color: $text;

		&::before {
			display: inline-block;
			width: 27px;
			height: 27px;

			font-style: normal;

			text-align: center;
		}

		&.discord::before {
			content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGZpbGw9IiM4YzllZmYiIGQ9Ik00MCwxMmMwLDAtNC41ODUtMy41ODgtMTAtNGwtMC40ODgsMC45NzZDMzQuNDA4LDEwLjE3NCwzNi42NTQsMTEuODkxLDM5LDE0Yy00LjA0NS0yLjA2NS04LjAzOS00LTE1LTRzLTEwLjk1NSwxLjkzNS0xNSw0YzIuMzQ2LTIuMTA5LDUuMDE4LTQuMDE1LDkuNDg4LTUuMDI0TDE4LDhjLTUuNjgxLDAuNTM3LTEwLDQtMTAsNHMtNS4xMjEsNy40MjUtNiwyMmM1LjE2Miw1Ljk1MywxMyw2LDEzLDZsMS42MzktMi4xODVDMTMuODU3LDM2Ljg0OCwxMC43MTUsMzUuMTIxLDgsMzJjMy4yMzgsMi40NSw4LjEyNSw1LDE2LDVzMTIuNzYyLTIuNTUsMTYtNWMtMi43MTUsMy4xMjEtNS44NTcsNC44NDgtOC42MzksNS44MTVMMzMsNDBjMCwwLDcuODM4LTAuMDQ3LDEzLTZDNDUuMTIxLDE5LjQyNSw0MCwxMiw0MCwxMnogTTE3LjUsMzBjLTEuOTMzLDAtMy41LTEuNzkxLTMuNS00YzAtMi4yMDksMS41NjctNCwzLjUtNHMzLjUsMS43OTEsMy41LDRDMjEsMjguMjA5LDE5LjQzMywzMCwxNy41LDMweiBNMzAuNSwzMGMtMS45MzMsMC0zLjUtMS43OTEtMy41LTRjMC0yLjIwOSwxLjU2Ny00LDMuNS00czMuNSwxLjc5MSwzLjUsNEMzNCwyOC4yMDksMzIuNDMzLDMwLDMwLjUsMzB6Ii8+PC9zdmc+');
		}
		&.email::before {
			content: '📧';
		}
		&.phone::before {
			content: '📞';
		}
	}
</style>
