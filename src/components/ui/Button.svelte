<script lang="ts">
	export let onClick: () => void;
</script>

<button class="bg-frost-2 text-nord-0 p-2 pl-3 pr-3 rounded hover:bg-frost-3" on:click={onClick}>
	<slot />
</button>
