<script lang='ts' context='module'>
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch, session, stuff }) => {
	const url = `/blog/articles.json`;
	const response = await fetch(url).then(value => value.json());

	const [first, ...rest] = response;

	return {
		props: {
			firstArticle: first,
			articles: rest
		}
	};
};


</script>

<script lang='ts'>
export let articles: [];
export let firstArticle;
</script>

<svelte:head>
	<title>Articles - Mael Kerichard</title>
</svelte:head>

<main class='space-y-20'>
	<h1 class='font-bold text-5xl'>Articles</h1>

	<section>
		<a href={"blog/"+ firstArticle.path} class='grid sm:grid-cols-2 sm:gap-10 gap-2 block'>
			<img class='rounded-xl w-full' src={firstArticle.photoPath} alt='Article photo'>
			<div class='space-y-5'>
				<div class='text-black/50 font-medium'>{new Date(firstArticle.dateCreated).toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric"
				})}</div>
				<div class='lg:text-5xl font-medium text-2xl'>{firstArticle.title}</div>
				<div>{firstArticle.description}</div>
			</div>
		</a>
	</section>

	<section class='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
		{#each articles as article}
			<a href={"blog/"+article.path} class='grid grid-cols-1 gap-2 block'>
				<img class='rounded-xl w-full' src={article.photoPath} alt='Article photo'>
				<div class='space-y-2'>
					<div class='text-black/50 font-medium'>{new Date(article.dateCreated).toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric"
					})}</div>
					<div class='text-2xl font-medium'>{article.title}</div>
					<div>{article.description}</div>
				</div>
			</a>
		{/each}
	</section>
</main>

