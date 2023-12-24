<script lang="ts">
	import CodeEditor from '../components/CodeEditor.svelte';
	import SlidesPreview from '../components/SlidesPreview.svelte';
	import SlidesThemeOptionSelector from '../components/SlidesThemeOptionSelector.svelte';
</script>

<div class="h-full grid grid-cols-2 gap-10">
	<div><SlidesThemeOptionSelector /><CodeEditor /></div>
	<div class="p-5 bg-slate-500"><SlidesPreview /></div>
</div>
