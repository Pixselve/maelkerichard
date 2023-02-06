import type { PageServerLoad } from './$types';
import { DEV_TO_API_KEY } from '$env/static/private';
import type { Article } from '$lib/devtoAPI';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const articles = (await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': DEV_TO_API_KEY,
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as Article[];
	return {
		articles
	};
};
