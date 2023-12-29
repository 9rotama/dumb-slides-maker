<script lang="ts">
	import { markdown } from '@codemirror/lang-markdown';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { onMount } from 'svelte';
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdownTextStore } from '../stores/markdownTextStore';
	let value = '# タイトル';

	onMount(() => {
		updateTextStore();
	});

	const updateTextStore = () => {
		markdownTextStore.set(value);
	};
</script>

<CodeMirror
	bind:value
	on:change={updateTextStore}
	lang={markdown()}
	theme={oneDark}
	styles={{
		'&': {
			width: '100%',
			height: '90vh'
		}
	}}
/>
