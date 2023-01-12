import { getContributionGraph } from '$lib/contributionGraphData';

/** @type {import('./$types').PageLoad} */
export const load = async ({ setHeaders, platform }) => {
	const contributionGraph = await getContributionGraph(platform.env.GITHUB_TOKEN);
	setHeaders({
		'Cache-Control': "max-age=86400"
	});
	return {
		contributionGraph
	};
};
