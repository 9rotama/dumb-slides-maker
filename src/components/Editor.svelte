<script>
	import CodeEditor from './CodeEditor.svelte';
	import ExportTab from './ExportTab.svelte';
	import ThemeEditor from './ThemeEditor.svelte';
	import TabSelect from './ui/TabSelect.svelte';

	let selectedTabIndex = 0;
</script>

<div class="relative w-full h-full flex flex-col">
	<div class="relative h-[2.5rem] ml-auto mr-auto">
		<TabSelect
			tabs={[{ name: 'Markdown編集' }, { name: 'テーマ設定' }, { name: 'エクスポート' }]}
			bind:selectedTabIndex
		/>
	</div>

	<div class="tab-content">
		{#if selectedTabIndex === 0}
			<CodeEditor />
		{/if}
		{#if selectedTabIndex === 1}
			<ThemeEditor />
		{/if}
		{#if selectedTabIndex === 2}
			<ExportTab />
		{/if}
	</div>
</div>

<style>
	.tab-content {
		height: calc(100% - 2.5rem);
	}
</style>
