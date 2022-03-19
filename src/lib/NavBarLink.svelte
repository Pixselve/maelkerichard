<script lang='ts'>
export let active = false;
export let href;
</script>

<a class='{active ? "text-primary border-b-4" : "text-black/50"} uppercase font-bold border-primary pb-5' href={href}><slot></slot></a>
