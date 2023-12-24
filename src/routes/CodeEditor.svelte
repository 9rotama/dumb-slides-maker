<script lang="ts">
	import { markdown } from '@codemirror/lang-markdown';
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdownTextStore } from '../stores/markdownTextStore';

	let value = '# タイトル';

	const onTextChange = () => {
		markdownTextStore.set(value);
	};
</script>

<CodeMirror
	bind:value
	on:change={onTextChange}
	lang={markdown()}
	styles={{
		'&': {
			width: '100%',
			height: '90vh'
		}
	}}
/>
