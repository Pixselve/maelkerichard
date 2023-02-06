<MetaTags canonical='https://mael.app/blog'
					description='Stay informed and gain valuable insights on the latest tech industry trends and developments.'
					title='Blog - Mael Kerichard'></MetaTags>

<main class='text-lg p-4 '>
	<div class='text-slate-50 max-w-6xl m-auto space-y-10'>
		<h1 class='text-5xl font-bold'>Articles</h1>
		{#each data.articles as article}
			<ArticleCard key='{article.id}' {article} />
		{/each}


	</div>
</main>

<script lang='ts'>
import type { PageData } from './$types';
import ArticleCard from '$lib/ArticleCard.svelte';
import MetaTags from '$lib/MetaTags.svelte';

export let data: PageData;
</script>
