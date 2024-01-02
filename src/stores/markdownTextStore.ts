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

# スライドタイトル
本家動画を視聴の際は、近所迷惑にならない程度に音量を最大にし、部屋は明るくして、画面から3メートルは離れて観やがってください。
- リスト
  - ネスト

![width:300px image](https://i.imgur.com/gYoEV48.jpeg)


---

# 

\`\`\`js
var hoge = require('hogehoge')();
var { fuga } = require('fugafuga');

hoge.use(fuga);
\`\`\`

|column 1|column 2|
|--|--|
|aaa|aaa|
|bbb|bbb|

`);
