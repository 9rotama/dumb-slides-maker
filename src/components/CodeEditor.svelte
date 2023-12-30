<script lang="ts">
	import { markdown } from '@codemirror/lang-markdown';
	import { oneDark } from '@codemirror/theme-one-dark';
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdownTextStore } from '../stores/markdownTextStore';
</script>

<div class="h-full">
	<CodeMirror
		bind:value={$markdownTextStore}
		lang={markdown()}
		theme={oneDark}
		styles={{
			'&': {
				width: '100%',
				height: '100%'
			}
		}}
	/>
</div>
