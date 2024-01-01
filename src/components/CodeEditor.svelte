<script lang="ts">
	import { markdown } from '@codemirror/lang-markdown';
	import { nord } from '@uiw/codemirror-theme-nord';
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdownTextStore } from '../stores/markdownTextStore';
</script>

<CodeMirror
	bind:value={$markdownTextStore}
	lang={markdown()}
	extensions={[nord]}
	class="h-full scrollbar"
	styles={{ '&': { height: '100%', 'font-size': '1rem' } }}
/>
