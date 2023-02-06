import { DEV_TO_API_KEY } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

export interface User {
	name: string;
	username: string;
	twitter_username?: any;
	github_username: string;
	user_id: number;
	website_url: string;
	profile_image: string;
	profile_image_90: string;
}

export interface Article {
	type_of: string;
	id: number;
	title: string;
	description: string;
	published: boolean;
	published_at: Date;
	slug: string;
	path: string;
	url: string;
	comments_count: number;
	public_reactions_count: number;
	page_views_count: number;
	published_timestamp: Date;
	body_markdown: string;
	positive_reactions_count: number;
	cover_image?: any;
	tag_list: string[];
	canonical_url: string;
	reading_time_minutes: number;
	user: User;
}

export async function getAllArticles(fetch: RequestEvent['fetch']): Promise<Article[]> {
	const articles = (await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': DEV_TO_API_KEY,
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as Article[];

	return articles;
}
