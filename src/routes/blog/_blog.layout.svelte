<script>
export let title;
export let description;
export let dateCreated;
export let photoPath;

import Image from "svelte-image"
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
	<meta property='og:image' content={photoPath} />

	<!-- Twitter -->
	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://maelkerichard.com/' />
	<meta property='twitter:title' content={title} />
	<meta
		property='twitter:description'
		content={description}
	/>
	<meta property='twitter:image' content={photoPath} />

</svelte:head>

<header class='mb-20 space-y-20'>
	<Image class='w-full h-60 object-cover rounded-lg' src={photoPath} alt=''/>
	<div>
		<div class='text-black/50 font-bold'>
			Mael Kerichard • <span>{new Date(dateCreated).toLocaleDateString("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric"
		})}</span>
		</div>

		<h1 class='font-bold text-5xl'>{title}</h1>
	</div>
</header>

<article class='prose prose-img:w-full max-w-none'>
	<slot></slot>
</article>
