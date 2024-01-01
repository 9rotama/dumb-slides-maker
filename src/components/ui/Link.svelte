<script lang="ts">
	export let href: string;
</script>

<a {href} class="bg-frost-2 text-slate-700 p-2 pl-3 border-box pr-3 rounded hover:bg-frost-3">
	<slot />
</a>
