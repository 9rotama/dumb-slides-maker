<script lang="ts">
	export let href: string;
</script>

<a {href} class="bg-slate-100 text-slate-700 p-2 pl-3 border-box pr-3 rounded hover:bg-slate-200">
	<slot />
</a>
