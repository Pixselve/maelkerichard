import { getContributionGraph } from '$lib/contributionGraphData';

/** @type {import('./$types').PageLoad} */
export const load = async ({ setHeaders }: { setHeaders: any }) => {
	const contributionGraph = await getContributionGraph();
	setHeaders({
		'Cache-Control': 'max-age=86400'
	});
	return {
		contributionGraph
	};
};
