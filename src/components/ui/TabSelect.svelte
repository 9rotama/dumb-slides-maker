<script lang="ts">
	import type { TabSelectOption } from '../../types/TabSelectOption';

	export let tabs: TabSelectOption[];
	export let selectedTabIndex: number;

	function selectOption(tabIndex: number) {
		selectedTabIndex = tabIndex;
	}
</script>

<div class="flex flex-row box-border rounded overflow-hidden w-max">
	{#each tabs as tab, i}
		<button
			class="flex items-center justify-center p-1 w-50 {selectedTabIndex === i
				? 'bg-nord-6 text-nord-0'
				: 'bg-nord-1 hover:bg-nord-2'}"
			on:click={() => selectOption(i)}
		>
			{tab.name}
		</button>
	{/each}
</div>
