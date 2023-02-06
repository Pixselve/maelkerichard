import type { PageServerLoad } from './$types';
import type { Article } from '$lib/devtoAPI';
import { DEV_TO_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `public max-age=0, s-maxage=518400}`
	});
	const article = (await fetch(`https://dev.to/api/articles/pixselve/${params.slug}`, {
		headers: {
			'api-key': DEV_TO_API_KEY,
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as Article;
	return {
		article
	};
};
