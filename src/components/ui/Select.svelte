<script lang="ts">
	import type { SelectOption } from '../../types/SelectOption';

	export let options: SelectOption[];
	export let selectedOption: SelectOption;
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(optionNum: number) {
		selectedOption = options[optionNum];
		toggleDropdown();
	}
</script>

<div class="relative inline-block">
	<button
		class="p-2 bg-gray-900 border border-gray-600 rounded hover:border-gray-500 flex items-center gap-2"
		on:click={toggleDropdown}
	>
		{selectedOption?.name || 'Select an option'}
		<div class="i-ri-arrow-down-s-line" />
	</button>
	<div
		class="absolute border border-gray-500 bg-slate-700 w-full flex-col rounded z-2 {isOpen
			? 'flex'
			: 'hidden'}"
	>
		{#each options as option, i}
			<button class="hover:bg-slate-800" on:click={() => selectOption(i)}>{option.name}</button>
		{/each}
	</div>
</div>
