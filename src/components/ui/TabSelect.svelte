<script lang="ts">
	import type { TabSelectOption } from '../../types/TabSelectOption';

	export let tabs: TabSelectOption[];
	export let selectedTabIndex: number;

	function selectOption(tabIndex: number) {
		selectedTabIndex = tabIndex;
	}
</script>

<div class="flex flex-row">
	{#each tabs as tab, i}
		<button
			class="flex items-center justify-center p-2 {selectedTabIndex === i
				? 'bg-slate-100 text-slate-700'
				: 'bg-slate-900 hover:bg-slate-800'}"
			on:click={() => selectOption(i)}
		>
			{tab.name}
		</button>
	{/each}
</div>
