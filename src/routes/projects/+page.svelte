<script lang='ts'>

import Project from '$lib/Project.svelte';
import { projects } from './projects';
import MetaTags from '$lib/MetaTags.svelte';

export let data;

const maxContributions = data.contributionGraph.data.user.contributionsCollection.contributionCalendar.weeks.reduce((acc, week) => {
	const max = week.contributionDays.reduce((acc, day) => {
		return Math.max(acc, day.contributionCount);
	}, 0);
	return Math.max(acc, max);
}, 0);


</script>

<MetaTags canonical='https://mael.app/projects'
					description='Discover a portfolio of innovative and challenging projects.'
					title='Projects - Mael Kerichard'></MetaTags>

<main class='text-lg p-4'>
	<div class='text-slate-50 max-w-6xl m-auto space-y-10'>
		<div class='flex justify-between w-full'>
			{#each data.contributionGraph.data.user.contributionsCollection.contributionCalendar.weeks as item}
				<div class='flex flex-col space-y-1'>
					{#each item.contributionDays as day}
						<div style={`opacity: ${day.contributionCount / maxContributions + 0.05}`}
								 class='h-1.5 xs:h-2 sm:h-3 md:h-3.5 xl:h-4 aspect-square bg-blue-500 rounded-sm'></div>
					{/each}
				</div>
			{/each}
		</div>
		<h1 class='text-5xl font-bold'>Projects</h1>
		<div class='bg-blue-500/10 p-4 rounded-lg flex items-center space-x-4 text-xl'>
			<div>
				<svg class='h-12 w-12 fill-slate-400' viewBox='0 0 24 24'>
					<path
						d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
					/>
				</svg>
			</div>
			<p>
				Find all my open source projects on <a
				class='text-blue-500 underline font-bold '
				href='https://github.com/Pixselve'
				rel='noreferrer'
				target='_blank'>Github</a
			>. I also have a
				<a
					class='text-blue-500 underline font-bold '
					rel='noreferrer'
					target='_blank'
					href='https://github.com/pixselve-school'>special organization</a
				> for all the projects I have done at school.
			</p>
		</div>
		{#each projects as category}
			<h1 class='text-5xl font-bold border-b-[5px] pb-2 border-dotted'>{category.name}</h1>

			<div class='grid grid-cols-1 md:grid-cols-2 gap-10'>

				{#each category.projects as project}
					<Project {project} />
				{/each}

			</div>
		{/each}
	</div>

</main>
