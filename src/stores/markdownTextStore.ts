import { writable } from 'svelte/store';

export const markdownTextStore = writable<string>(`
---
paginate: true
header: ""
footer: ""
---

<!--
_class: lead
_paginate: false
_header: ""
_footer: ""
-->

# タイトル

名前

---

# タイトル

![width:200px image](https://i.imgur.com/gYoEV48.jpeg)

`);
