<script lang="ts">
	export let value: number;
	export let name: string;
	export let id: string;
	export let min: number | undefined;
	export let max: number | undefined;
</script>

<input
	class="no-spin p-2 bg-nord-1 border border-nord-3 rounded hover:border-nord-2 flex items-center gap-2"
	type="number"
	{id}
	{name}
	bind:value
	{min}
	{max}
/>

<style>
	.no-spin::-webkit-outer-spin-button,
	.no-spin::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
