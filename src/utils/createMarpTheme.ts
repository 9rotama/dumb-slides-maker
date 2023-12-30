import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

const fontFamilyName = (value: string) => {
	switch (value) {
		case 'default':
			return 'sans-serif';
		case 'pop':
			return '"Mochiy Pop One"';
		case 'yusei-magic':
			return '"Yusei Magic"';
	}
};

export const createMarpTheme = (option: SlidesThemeOptions) => {
	return `

/* @theme example */

${marpDefaultTheme}

section {
  background-color: ${option.backgroundColor.value};
  margin-bottom: 20px;
  filter: drop-shadow(0px 10px 10px #00002270);
  box-sizing: border-box;
  font-family: ${fontFamilyName(option.fontFamily.value)}, sans-serif;
}

  `;
};

const marpDefaultTheme = `

:root .markdown-body, :root section, :root [data-theme="light"] {
  color-scheme: light;
  --color-prettylights-syntax-comment: #57606a;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #6639ba;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #1f2328;
  --color-fg-muted: #656d76;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #fff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: rgba(216, 222, 228, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-success-fg: #1a7f37;
  --color-success-emphasis: #1f883d;
  --color-attention-fg: #9a6700;
  --color-attention-emphasis: #9a6700;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #d1242f;
  --color-danger-emphasis: #cf222e;
  --color-done-fg: #8250df;
  --color-done-emphasis: #8250df;
}
.markdown-body, section {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.markdown-body .octicon, section .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}
.markdown-body h1:hover .anchor .octicon-link:before, section h1:hover .anchor .octicon-link:before, .markdown-body h2:hover .anchor .octicon-link:before, section h2:hover .anchor .octicon-link:before, .markdown-body h3:hover .anchor .octicon-link:before, section h3:hover .anchor .octicon-link:before, .markdown-body h4:hover .anchor .octicon-link:before, section h4:hover .anchor .octicon-link:before, .markdown-body h5:hover .anchor .octicon-link:before, section h5:hover .anchor .octicon-link:before, .markdown-body h6:hover .anchor .octicon-link:before, section h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}
.markdown-body details, section details, .markdown-body figcaption, section figcaption, .markdown-body figure, section figure {
  display: block;
}
.markdown-body summary, section summary {
  display: list-item;
}
.markdown-body [hidden], section [hidden] {
  display: none !important;
}
.markdown-body a, section a {
  background-color: transparent;
  color: var(--color-accent-fg);
  text-decoration: none;
}
.markdown-body abbr[title], section abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
.markdown-body b, section b, .markdown-body strong, section strong {
  font-weight: var(--base-text-weight-semibold, 600);
}
.markdown-body dfn, section dfn {
  font-style: italic;
}
.markdown-body h1, section h1 {
  margin: 0.67em 0;
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid var(--color-border-muted);
}
.markdown-body mark, section mark {
  background-color: var(--color-attention-subtle);
  color: var(--color-fg-default);
}
.markdown-body small, section small {
  font-size: 90%;
}
.markdown-body sub, section sub, .markdown-body sup, section sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.markdown-body sub, section sub {
  bottom: -0.25em;
}
.markdown-body sup, section sup {
  top: -0.5em;
}
.markdown-body img, section img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: var(--color-canvas-default);
}
.markdown-body code, section code, .markdown-body kbd, section kbd, .markdown-body pre, section pre, .markdown-body samp, section samp {
  font-family: monospace;
  font-size: 1em;
}
.markdown-body figure, section figure {
  margin: 1em 40px;
}
.markdown-body hr, section hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid var(--color-border-muted);
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: var(--color-border-default);
  border: 0;
}
.markdown-body input, section input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.markdown-body [type=button], section [type=button], .markdown-body [type=reset], section [type=reset], .markdown-body [type=submit], section [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}
.markdown-body [type=checkbox], section [type=checkbox], .markdown-body [type=radio], section [type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.markdown-body [type=number]::-webkit-inner-spin-button, section [type=number]::-webkit-inner-spin-button, .markdown-body [type=number]::-webkit-outer-spin-button, section [type=number]::-webkit-outer-spin-button {
  height: auto;
}
.markdown-body [type=search]::-webkit-search-cancel-button, section [type=search]::-webkit-search-cancel-button, .markdown-body [type=search]::-webkit-search-decoration, section [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
.markdown-body ::-webkit-input-placeholder, section ::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
.markdown-body ::-webkit-file-upload-button, section ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}
.markdown-body a:hover, section a:hover {
  text-decoration: underline;
}
.markdown-body ::placeholder, section ::placeholder {
  color: var(--color-fg-subtle);
  opacity: 1;
}
.markdown-body hr::before, section hr::before {
  display: table;
  content: "";
}
.markdown-body hr::after, section hr::after {
  display: table;
  clear: both;
  content: "";
}
.markdown-body table, section table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}
.markdown-body td, section td, .markdown-body th, section th {
  padding: 0;
}
.markdown-body details summary, section details summary {
  cursor: pointer;
}
.markdown-body details:not([open]) > *:not(summary), section details:not([open]) > *:not(summary) {
  display: none !important;
}
.markdown-body a:focus, section a:focus, .markdown-body [role=button]:focus, section [role=button]:focus, .markdown-body input[type=radio]:focus, section input[type=radio]:focus, .markdown-body input[type=checkbox]:focus, section input[type=checkbox]:focus {
  outline: 2px solid var(--color-accent-fg);
  outline-offset: -2px;
  box-shadow: none;
}
.markdown-body a:focus:not(:focus-visible), section a:focus:not(:focus-visible), .markdown-body [role=button]:focus:not(:focus-visible), section [role=button]:focus:not(:focus-visible), .markdown-body input[type=radio]:focus:not(:focus-visible), section input[type=radio]:focus:not(:focus-visible), .markdown-body input[type=checkbox]:focus:not(:focus-visible), section input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}
.markdown-body a:focus-visible, section a:focus-visible, .markdown-body [role=button]:focus-visible, section [role=button]:focus-visible, .markdown-body input[type=radio]:focus-visible, section input[type=radio]:focus-visible, .markdown-body input[type=checkbox]:focus-visible, section input[type=checkbox]:focus-visible {
  outline: 2px solid var(--color-accent-fg);
  outline-offset: -2px;
  box-shadow: none;
}
.markdown-body a:not([class]):focus, section a:not([class]):focus, .markdown-body a:not([class]):focus-visible, section a:not([class]):focus-visible, .markdown-body input[type=radio]:focus, section input[type=radio]:focus, .markdown-body input[type=radio]:focus-visible, section input[type=radio]:focus-visible, .markdown-body input[type=checkbox]:focus, section input[type=checkbox]:focus, .markdown-body input[type=checkbox]:focus-visible, section input[type=checkbox]:focus-visible {
  outline-offset: 0;
}
.markdown-body kbd, section kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: var(--color-fg-default);
  vertical-align: middle;
  background-color: var(--color-canvas-subtle);
  border: solid 1px var(--color-neutral-muted);
  border-bottom-color: var(--color-neutral-muted);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
}
.markdown-body h1, section h1, .markdown-body h2, section h2, .markdown-body h3, section h3, .markdown-body h4, section h4, .markdown-body h5, section h5, .markdown-body h6, section h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: var(--base-text-weight-semibold, 600);
  line-height: 1.25;
}
.markdown-body h2, section h2 {
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid var(--color-border-muted);
}
.markdown-body h3, section h3 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1.25em;
}
.markdown-body h4, section h4 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1em;
}
.markdown-body h5, section h5 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 0.875em;
}
.markdown-body h6, section h6 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 0.85em;
  color: var(--color-fg-muted);
}
.markdown-body p, section p {
  margin-top: 0;
  margin-bottom: 10px;
}
.markdown-body blockquote, section blockquote {
  margin: 0;
  padding: 0 1em;
  color: var(--color-fg-muted);
  border-left: 0.25em solid var(--color-border-default);
}
.markdown-body ul, section ul, .markdown-body ol, section ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}
.markdown-body ol ol, section ol ol, .markdown-body ul ol, section ul ol {
  list-style-type: lower-roman;
}
.markdown-body ul ul ol, section ul ul ol, .markdown-body ul ol ol, section ul ol ol, .markdown-body ol ul ol, section ol ul ol, .markdown-body ol ol ol, section ol ol ol {
  list-style-type: lower-alpha;
}
.markdown-body dd, section dd {
  margin-left: 0;
}
.markdown-body tt, section tt, .markdown-body code, section code, .markdown-body samp, section samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}
.markdown-body pre, section pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}
.markdown-body .octicon, section .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}
.markdown-body input::-webkit-outer-spin-button, section input::-webkit-outer-spin-button, .markdown-body input::-webkit-inner-spin-button, section input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}
.markdown-body .mr-2, section .mr-2 {
  margin-right: var(--base-size-8, 8px) !important;
}
.markdown-body::before, section::before {
  display: table;
  content: "";
}
.markdown-body::after, section::after {
  display: table;
  clear: both;
  content: "";
}
.markdown-body > *:first-child, section > *:first-child {
  margin-top: 0 !important;
}
.markdown-body > *:last-child, section > *:last-child {
  margin-bottom: 0 !important;
}
.markdown-body a:not([href]), section a:not([href]) {
  color: inherit;
  text-decoration: none;
}
.markdown-body .absent, section .absent {
  color: var(--color-danger-fg);
}
.markdown-body .anchor, section .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}
.markdown-body .anchor:focus, section .anchor:focus {
  outline: none;
}
.markdown-body p, section p, .markdown-body blockquote, section blockquote, .markdown-body ul, section ul, .markdown-body ol, section ol, .markdown-body dl, section dl, .markdown-body table, section table, .markdown-body pre, section pre, .markdown-body details, section details {
  margin-top: 0;
  margin-bottom: 16px;
}
.markdown-body blockquote > :first-child, section blockquote > :first-child {
  margin-top: 0;
}
.markdown-body blockquote > :last-child, section blockquote > :last-child {
  margin-bottom: 0;
}
.markdown-body h1 .octicon-link, section h1 .octicon-link, .markdown-body h2 .octicon-link, section h2 .octicon-link, .markdown-body h3 .octicon-link, section h3 .octicon-link, .markdown-body h4 .octicon-link, section h4 .octicon-link, .markdown-body h5 .octicon-link, section h5 .octicon-link, .markdown-body h6 .octicon-link, section h6 .octicon-link {
  color: var(--color-fg-default);
  vertical-align: middle;
  visibility: hidden;
}
.markdown-body h1:hover .anchor, section h1:hover .anchor, .markdown-body h2:hover .anchor, section h2:hover .anchor, .markdown-body h3:hover .anchor, section h3:hover .anchor, .markdown-body h4:hover .anchor, section h4:hover .anchor, .markdown-body h5:hover .anchor, section h5:hover .anchor, .markdown-body h6:hover .anchor, section h6:hover .anchor {
  text-decoration: none;
}
.markdown-body h1:hover .anchor .octicon-link, section h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, section h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, section h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, section h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, section h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link, section h6:hover .anchor .octicon-link {
  visibility: visible;
}
.markdown-body h1 tt, section h1 tt, .markdown-body h1 code, section h1 code, .markdown-body h2 tt, section h2 tt, .markdown-body h2 code, section h2 code, .markdown-body h3 tt, section h3 tt, .markdown-body h3 code, section h3 code, .markdown-body h4 tt, section h4 tt, .markdown-body h4 code, section h4 code, .markdown-body h5 tt, section h5 tt, .markdown-body h5 code, section h5 code, .markdown-body h6 tt, section h6 tt, .markdown-body h6 code, section h6 code {
  padding: 0 0.2em;
  font-size: inherit;
}
.markdown-body summary h1, section summary h1, .markdown-body summary h2, section summary h2, .markdown-body summary h3, section summary h3, .markdown-body summary h4, section summary h4, .markdown-body summary h5, section summary h5, .markdown-body summary h6, section summary h6 {
  display: inline-block;
}
.markdown-body summary h1 .anchor, section summary h1 .anchor, .markdown-body summary h2 .anchor, section summary h2 .anchor, .markdown-body summary h3 .anchor, section summary h3 .anchor, .markdown-body summary h4 .anchor, section summary h4 .anchor, .markdown-body summary h5 .anchor, section summary h5 .anchor, .markdown-body summary h6 .anchor, section summary h6 .anchor {
  margin-left: -40px;
}
.markdown-body summary h1, section summary h1, .markdown-body summary h2, section summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}
.markdown-body ul.no-list, section ul.no-list, .markdown-body ol.no-list, section ol.no-list {
  padding: 0;
  list-style-type: none;
}
.markdown-body ol[type="a s"], section ol[type="a s"] {
  list-style-type: lower-alpha;
}
.markdown-body ol[type="A s"], section ol[type="A s"] {
  list-style-type: upper-alpha;
}
.markdown-body ol[type="i s"], section ol[type="i s"] {
  list-style-type: lower-roman;
}
.markdown-body ol[type="I s"], section ol[type="I s"] {
  list-style-type: upper-roman;
}
.markdown-body ol[type="1"], section ol[type="1"] {
  list-style-type: decimal;
}
.markdown-body div > ol:not([type]), section div > ol:not([type]) {
  list-style-type: decimal;
}
.markdown-body ul ul, section ul ul, .markdown-body ul ol, section ul ol, .markdown-body ol ol, section ol ol, .markdown-body ol ul, section ol ul {
  margin-top: 0;
  margin-bottom: 0;
}
.markdown-body li > p, section li > p {
  margin-top: 16px;
}
.markdown-body li + li, section li + li {
  margin-top: 0.25em;
}
.markdown-body dl, section dl {
  padding: 0;
}
.markdown-body dl dt, section dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: var(--base-text-weight-semibold, 600);
}
.markdown-body dl dd, section dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
.markdown-body table th, section table th {
  font-weight: var(--base-text-weight-semibold, 600);
}
.markdown-body table th, section table th, .markdown-body table td, section table td {
  padding: 6px 13px;
  border: 1px solid var(--color-border-default);
}
.markdown-body table td > :last-child, section table td > :last-child {
  margin-bottom: 0;
}
.markdown-body table tr, section table tr {
  background-color: var(--color-canvas-default);
  border-top: 1px solid var(--color-border-muted);
}
.markdown-body table tr:nth-child(2n), section table tr:nth-child(2n) {
  background-color: var(--color-canvas-subtle);
}
.markdown-body table img, section table img {
  background-color: transparent;
}
.markdown-body img[align=right], section img[align=right] {
  padding-left: 20px;
}
.markdown-body img[align=left], section img[align=left] {
  padding-right: 20px;
}
.markdown-body .emoji, section .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}
.markdown-body span.frame, section span.frame {
  display: block;
  overflow: hidden;
}
.markdown-body span.frame > span, section span.frame > span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid var(--color-border-default);
}
.markdown-body span.frame span img, section span.frame span img {
  display: block;
  float: left;
}
.markdown-body span.frame span span, section span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: var(--color-fg-default);
}
.markdown-body span.align-center, section span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}
.markdown-body span.align-center > span, section span.align-center > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}
.markdown-body span.align-center span img, section span.align-center span img {
  margin: 0 auto;
  text-align: center;
}
.markdown-body span.align-right, section span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}
.markdown-body span.align-right > span, section span.align-right > span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}
.markdown-body span.align-right span img, section span.align-right span img {
  margin: 0;
  text-align: right;
}
.markdown-body span.float-left, section span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}
.markdown-body span.float-left span, section span.float-left span {
  margin: 13px 0 0;
}
.markdown-body span.float-right, section span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}
.markdown-body span.float-right > span, section span.float-right > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}
.markdown-body code, section code, .markdown-body tt, section tt {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: var(--color-neutral-muted);
  border-radius: 6px;
}
.markdown-body code br, section code br, .markdown-body tt br, section tt br {
  display: none;
}
.markdown-body del code, section del code {
  text-decoration: inherit;
}
.markdown-body samp, section samp {
  font-size: 85%;
}
.markdown-body pre code, section pre code {
  font-size: 100%;
}
.markdown-body pre > code, section pre > code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}
.markdown-body .highlight, section .highlight {
  margin-bottom: 16px;
}
.markdown-body .highlight pre, section .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}
.markdown-body .highlight pre, section .highlight pre, .markdown-body pre, section pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-subtle);
  border-radius: 6px;
}
.markdown-body pre code, section pre code, .markdown-body pre tt, section pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
.markdown-body .csv-data td, section .csv-data td, .markdown-body .csv-data th, section .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}
.markdown-body .csv-data .blob-num, section .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: var(--color-canvas-default);
  border: 0;
}
.markdown-body .csv-data tr, section .csv-data tr {
  border-top: 0;
}
.markdown-body .csv-data th, section .csv-data th {
  font-weight: var(--base-text-weight-semibold, 600);
  background: var(--color-canvas-subtle);
  border-top: 0;
}
.markdown-body [data-footnote-ref]::before, section [data-footnote-ref]::before {
  content: "[";
}
.markdown-body [data-footnote-ref]::after, section [data-footnote-ref]::after {
  content: "]";
}
.markdown-body .footnotes, section .footnotes {
  font-size: 12px;
  color: var(--color-fg-muted);
  border-top: 1px solid var(--color-border-default);
}
.markdown-body .footnotes ol, section .footnotes ol {
  padding-left: 16px;
}
.markdown-body .footnotes ol ul, section .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}
.markdown-body .footnotes li, section .footnotes li {
  position: relative;
}
.markdown-body .footnotes li:target::before, section .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid var(--color-accent-emphasis);
  border-radius: 6px;
}
.markdown-body .footnotes li:target, section .footnotes li:target {
  color: var(--color-fg-default);
}
.markdown-body .footnotes .data-footnote-backref g-emoji, section .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}
.markdown-body .pl-c, section .pl-c {
  color: var(--color-prettylights-syntax-comment);
}
.markdown-body .pl-c1, section .pl-c1, .markdown-body .pl-s .pl-v, section .pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}
.markdown-body .pl-e, section .pl-e, .markdown-body .pl-en, section .pl-en {
  color: var(--color-prettylights-syntax-entity);
}
.markdown-body .pl-smi, section .pl-smi, .markdown-body .pl-s .pl-s1, section .pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}
.markdown-body .pl-ent, section .pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}
.markdown-body .pl-k, section .pl-k {
  color: var(--color-prettylights-syntax-keyword);
}
.markdown-body .pl-s, section .pl-s, .markdown-body .pl-pds, section .pl-pds, .markdown-body .pl-s .pl-pse .pl-s1, section .pl-s .pl-pse .pl-s1, .markdown-body .pl-sr, section .pl-sr, .markdown-body .pl-sr .pl-cce, section .pl-sr .pl-cce, .markdown-body .pl-sr .pl-sre, section .pl-sr .pl-sre, .markdown-body .pl-sr .pl-sra, section .pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}
.markdown-body .pl-v, section .pl-v, .markdown-body .pl-smw, section .pl-smw {
  color: var(--color-prettylights-syntax-variable);
}
.markdown-body .pl-bu, section .pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}
.markdown-body .pl-ii, section .pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}
.markdown-body .pl-c2, section .pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}
.markdown-body .pl-sr .pl-cce, section .pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}
.markdown-body .pl-ml, section .pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}
.markdown-body .pl-mh, section .pl-mh, .markdown-body .pl-mh .pl-en, section .pl-mh .pl-en, .markdown-body .pl-ms, section .pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}
.markdown-body .pl-mi, section .pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}
.markdown-body .pl-mb, section .pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}
.markdown-body .pl-md, section .pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}
.markdown-body .pl-mi1, section .pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}
.markdown-body .pl-mc, section .pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}
.markdown-body .pl-mi2, section .pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}
.markdown-body .pl-mdr, section .pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}
.markdown-body .pl-ba, section .pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}
.markdown-body .pl-sg, section .pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}
.markdown-body .pl-corl, section .pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}
.markdown-body g-emoji, section g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: var(--base-text-weight-normal, 400);
  line-height: 1;
  vertical-align: -0.075em;
}
.markdown-body g-emoji img, section g-emoji img {
  width: 1em;
  height: 1em;
}
.markdown-body .task-list-item, section .task-list-item {
  list-style-type: none;
}
.markdown-body .task-list-item label, section .task-list-item label {
  font-weight: var(--base-text-weight-normal, 400);
}
.markdown-body .task-list-item.enabled label, section .task-list-item.enabled label {
  cursor: pointer;
}
.markdown-body .task-list-item + .task-list-item, section .task-list-item + .task-list-item {
  margin-top: 4px;
}
.markdown-body .task-list-item .handle, section .task-list-item .handle {
  display: none;
}
.markdown-body .task-list-item-checkbox, section .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.4em;
  vertical-align: middle;
}
.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox, section .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em 0.25em 0.2em;
}
.markdown-body .contains-task-list, section .contains-task-list {
  position: relative;
}
.markdown-body .contains-task-list:hover .task-list-item-convert-container, section .contains-task-list:hover .task-list-item-convert-container, .markdown-body .contains-task-list:focus-within .task-list-item-convert-container, section .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}
.markdown-body ::-webkit-calendar-picker-indicator, section ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}
.markdown-body .markdown-alert, section .markdown-alert {
  padding: var(--base-size-8) var(--base-size-16);
  margin-bottom: 16px;
  color: inherit;
  border-left: 0.25em solid var(--color-border-default);
}
.markdown-body .markdown-alert > :first-child, section .markdown-alert > :first-child {
  margin-top: 0;
}
.markdown-body .markdown-alert > :last-child, section .markdown-alert > :last-child {
  margin-bottom: 0;
}
.markdown-body .markdown-alert .markdown-alert-title, section .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: var(--base-text-weight-medium, 500);
  align-items: center;
  line-height: 1;
}
.markdown-body .markdown-alert.markdown-alert-note, section .markdown-alert.markdown-alert-note {
  border-left-color: var(--color-accent-emphasis);
}
.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title, section .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--color-accent-fg);
}
.markdown-body .markdown-alert.markdown-alert-important, section .markdown-alert.markdown-alert-important {
  border-left-color: var(--color-done-emphasis);
}
.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title, section .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--color-done-fg);
}
.markdown-body .markdown-alert.markdown-alert-warning, section .markdown-alert.markdown-alert-warning {
  border-left-color: var(--color-attention-emphasis);
}
.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title, section .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--color-attention-fg);
}
.markdown-body .markdown-alert.markdown-alert-tip, section .markdown-alert.markdown-alert-tip {
  border-left-color: var(--color-success-emphasis);
}
.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title, section .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--color-success-fg);
}
.markdown-body .markdown-alert.markdown-alert-caution, section .markdown-alert.markdown-alert-caution {
  border-left-color: var(--color-danger-emphasis);
}
.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title, section .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--color-danger-fg);
}
h1 {
  border-bottom: none;
  color: var(--h1-color);
  font-size: 1.6em;
}
h2 {
  border-bottom: none;
  font-size: 1.3em;
}
h3 {
  font-size: 1.1em;
}
h4 {
  font-size: 1.05em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 0.9em;
}
h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong {
  font-weight: inherit;
  color: var(--heading-strong-color);
}
h1::part(auto-scaling), h2::part(auto-scaling), h3::part(auto-scaling), h4::part(auto-scaling), h5::part(auto-scaling), h6::part(auto-scaling) {
  max-height: 563px;
}
hr {
  height: 0;
  padding-top: 0.25em;
}
pre {
  border: 1px solid var(--color-border-default);
  line-height: 1.15;
  overflow: visible;
 /* stylelint-disable selector-class-pattern */
 /* stylelint-enable selector-class-pattern */
}
pre::part(auto-scaling) {
  max-height: 529px;
}
pre :where(.hljs) {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}
pre :where(.hljs-doctag), pre :where(.hljs-keyword), pre :where(.hljs-meta .hljs-keyword), pre :where(.hljs-template-tag), pre :where(.hljs-template-variable), pre :where(.hljs-type), pre :where(.hljs-variable.language_) {
  color: var(--color-prettylights-syntax-keyword);
}
pre :where(.hljs-title), pre :where(.hljs-title.class_), pre :where(.hljs-title.class_.inherited__), pre :where(.hljs-title.function_) {
  color: var(--color-prettylights-syntax-entity);
}
pre :where(.hljs-attr), pre :where(.hljs-attribute), pre :where(.hljs-literal), pre :where(.hljs-meta), pre :where(.hljs-number), pre :where(.hljs-operator), pre :where(.hljs-selector-attr), pre :where(.hljs-selector-class), pre :where(.hljs-selector-id), pre :where(.hljs-variable) {
  color: var(--color-prettylights-syntax-constant);
}
pre :where(.hljs-string), pre :where(.hljs-meta .hljs-string), pre :where(.hljs-regexp) {
  color: var(--color-prettylights-syntax-string);
}
pre :where(.hljs-built_in), pre :where(.hljs-symbol) {
  color: var(--color-prettylights-syntax-variable);
}
pre :where(.hljs-code), pre :where(.hljs-comment), pre :where(.hljs-formula) {
  color: var(--color-prettylights-syntax-comment);
}
pre :where(.hljs-name), pre :where(.hljs-quote), pre :where(.hljs-selector-pseudo), pre :where(.hljs-selector-tag) {
  color: var(--color-prettylights-syntax-entity-tag);
}
pre :where(.hljs-subst) {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}
pre :where(.hljs-section) {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}
pre :where(.hljs-bullet) {
  color: var(--color-prettylights-syntax-markup-list);
}
pre :where(.hljs-emphasis) {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}
pre :where(.hljs-strong) {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}
pre :where(.hljs-addition) {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}
pre :where(.hljs-deletion) {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}
header, footer {
  margin: 0;
  position: absolute;
  left: 30px;
  color: var(--header-footer-color);
  font-size: 18px;
}
header {
  top: 21px;
}
footer {
  bottom: 21px;
}
section {
 /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder */
  --h1-color: #246;
  --header-footer-color: rgba(102, 102, 102, 0.75);
  --heading-strong-color: #48c;
  --paginate-color: #777;
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  font-size: 29px;
  height: 720px;
  justify-content: center;
  padding: 78.5px;
  width: 1280px;
}
section:where(.invert) {
  --h1-color: #cee7ff;
  --header-footer-color: rgba(153, 153, 153, 0.75);
  --heading-strong-color: #7bf;
  --paginate-color: #999;
}
section > *:last-child, section[data-footer] > :nth-last-child(2) {
  margin-bottom: 0;
}
section > *:first-child, section > header:first-child + * {
  margin-top: 0;
}
section::after {
  position: absolute;
  padding: 0;
  right: 30px;
  bottom: 21px;
  font-size: 24px;
  color: var(--paginate-color);
}
section[data-color] h1, section[data-color] h2, section[data-color] h3, section[data-color] h4, section[data-color] h5, section[data-color] h6 {
  color: currentcolor;
}
`;
