<script lang="ts">
	import CodeEditor from '../components/CodeEditor.svelte';
	import SlidesPreview from '../components/SlidesPreview.svelte';
	import SlidesThemeOptionSelector from '../components/SlidesThemeOptionSelector.svelte';
</script>

<SlidesThemeOptionSelector />
<div class="h-full grid grid-cols-2">
	<div class="h-[90vh] overflow-y-scroll"><CodeEditor /></div>
	<div class="h-[90vh] overflow-y-scroll bg-gray-900"><SlidesPreview /></div>
</div>
