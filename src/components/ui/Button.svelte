<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="bg-slate-100 text-slate-700 p-2 pl-3 pr-3 rounded hover:bg-slate-200"
	on:click={onClick}
>
	<slot />
</button>
