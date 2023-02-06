<script lang='ts'>
import type { Article } from '$lib/devtoAPI';

export let article: Article;
</script>


<a
	class='space-y-4 border-blue-500/20 border-2 rounded-md p-4 block cursor-pointer hover:bg-blue-500/20 transition-colors'
	href='/blog/{article.slug}' itemscope
	itemtype='https://schema.org/TechArticle'>
	<header>
		<h2 class='font-bold text-2xl' itemprop='name'>{article.title}</h2>
	</header>
	<p itemprop='abstract'>{article.description}</p>
	<div class='flex space-x-2 flex-wrap'>
		{#each article.tag_list as tag}
			<div class='inline text-sm bg-blue-500/20 px-1 p-0.5 rounded-md'>#{tag}</div>
		{/each}
	</div>
</a>
