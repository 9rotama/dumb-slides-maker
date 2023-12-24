<script lang="ts">
	import CodeEditor from './CodeEditor.svelte';
	import SlidesPreview from './SlidesPreview.svelte';
	import SlidesThemeOptionSelector from './SlidesThemeOptionSelector.svelte';
</script>

<div class="h-full grid grid-cols-2 gap-10">
	<div><SlidesThemeOptionSelector /><CodeEditor /></div>
	<div class="p-5 bg-slate-500"><SlidesPreview /></div>
</div>
