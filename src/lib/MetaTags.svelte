<svelte:head>
	<title>{title}</title>
	<meta content={description} name='description' />
	<meta content={title} property='og:title' />
	<meta content={image} property='og:image' />
	<meta content='{$page.url.origin}' property='og:url' />
	<meta content={description}
				property='og:description' />
	<meta content='Mael Kerichard' property='og:site_name' />

	<meta content='summary_large_image' name='twitter:card' />
	<meta content={title} name='twitter:title' />
	<meta content={description}
				name='twitter:description' />
	<meta content={image} name='twitter:image' />
	<meta content='index,follow' name='robots'>
	<meta content='index,follow' name='googlebot'>
	<link href={canonical} rel='canonical'>
</svelte:head>


<script lang='ts'>
import { page } from '$app/stores';

export let title = 'Mael Kerichard';
export let description;
export let image = 'https://mael.app/social.png';

export let canonical = 'https://mael.app';

</script>
