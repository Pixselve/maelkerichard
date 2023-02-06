<MetaTags canonical='https://mael.app/blog/{data.article.slug}' description='{data.article.description}'
					image={data.article.social_image} title='{data.article.title}'></MetaTags>


<main class='text-lg p-4'>
	<div class='text-slate-50 max-w-3xl m-auto space-y-10'>
		<h1 class='text-5xl font-bold'>{data.article.title}</h1>
		<div class='space-y-4'>
			<div>
				<span class='text-slate-200'>{new Date(data.article.published_at).toLocaleDateString()}</span>
				<span class='text-slate-200'>•</span>
				<span class='text-slate-200'>{data.article.reading_time_minutes} min read</span>
			</div>
			<div class='flex space-x-2 flex-wrap'>
				{#each data.article.tags as tag}
					<div class='inline text-sm bg-blue-500/20 px-1 p-0.5 rounded-md'>{tag}</div>
				{/each}
			</div>
		</div>

		<article class='prose prose-lg prose-invert prose-blue w-full'>
			{@html data.article.body_html}
		</article>


	</div>
</main>

<script lang='ts'>
import type { PageData } from './$types';
import MetaTags from '$lib/MetaTags.svelte';

export let data: PageData;
</script>
