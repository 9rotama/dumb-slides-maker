<script>
	import Link from './ui/Link.svelte';
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
	<p class="mb-4">PDF として出力するには、以下の手順に従ってください</p>
	<ol class="list-decimal flex flex-col gap-2 mb-6">
		<li>下の "<b>エクスポート</b>" ボタンを押す</li>
		<li>移動先のページで右クリックし、ブラウザの印刷メニューを開く</li>
		<li>"<b>PDF に保存する</b>" を選択し、印刷を押す</li>
	</ol>
	<Link href="/export">エクスポート</Link>
</div>
