import { Element, Marpit } from '@marp-team/marpit';
import highlightjs from 'markdown-it-highlightjs';
import { markdownItTable } from 'markdown-it-table';

export const marpit = new Marpit({
	container: [new Element('div', { class: 'marpit markdown-body' })]
})
	.use(highlightjs)
	.use(markdownItTable, {});
