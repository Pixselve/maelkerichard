<script>
export let title;
export let description;
export let dateCreated;
</script>

<svelte:head>

	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name='title' content={title} />
	<meta
		name='description'
		content={description}
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='article' />
	<meta property='article:author' content='Mael Kerichard' />
	<meta property='article:published_time' content={dateCreated} />
	<meta property='og:title' content={title} />
	<meta
		property='og:description'
		content={description}
	/>
	<meta property='og:image' content='' />

	<!-- Twitter -->
	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://maelkerichard.com/' />
	<meta property='twitter:title' content={title} />
	<meta
		property='twitter:description'
		content={description}
	/>
	<meta property='twitter:image' content='' />

</svelte:head>

<article class='prose prose-img:w-full max-w-none'>
	<slot></slot>
</article>
