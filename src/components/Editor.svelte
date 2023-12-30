<script>
	import CodeEditor from './CodeEditor.svelte';
	import ThemeEditor from './ThemeEditor.svelte';
	import TabSelect from './ui/TabSelect.svelte';

	let selectedTabIndex = 0;
</script>

<div class="flex flex-col w-full h-full">
	<TabSelect tabs={[{ name: 'Markdown編集' }, { name: 'テーマ設定' }]} bind:selectedTabIndex />
	{#if selectedTabIndex === 0}
		<CodeEditor />
	{/if}
	{#if selectedTabIndex === 1}
		<ThemeEditor />
	{/if}
</div>
