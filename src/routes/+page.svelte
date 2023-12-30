<script lang="ts">
	import Editor from '../components/Editor.svelte';
	import SlidesPreview from '../components/SlidesPreview.svelte';
</script>

<div class="h-full grid grid-cols-2">
	<div class="h-[90vh] overflow-y-scroll"><Editor /></div>
	<div class="h-[90vh] overflow-y-scroll bg-gray-900"><SlidesPreview /></div>
</div>
