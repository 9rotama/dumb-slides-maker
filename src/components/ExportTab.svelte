<script>
	import Link from './ui/Link.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<p>PDFとして出力するには、以下の手順に従ってください</p>
	<ol class="list-decimal">
		<li>下の"エクスポート"ボタンを押す</li>
		<li>移動先のページで右クリックし、ブラウザの印刷メニューを開く</li>
		<li>PDFに保存するを選択し、印刷を押す</li>
	</ol>
	<Link href="/export">エクスポート</Link>
</div>
