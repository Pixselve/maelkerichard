<script lang='ts'>
import MetaTags from '$lib/MetaTags.svelte';

const events = [
	{
		timeDate: new Date('2019-09'),
		title: 'Join the École Supérieure d\'Ingénieurs de Rennes'
	},
	{
		timeDate: new Date('2020-09'),
		ranking: '4th place',
		title: 'Break The Code - Breizh Edition 2020',
		description:
			'In this 2020 edition, 126 students from 13 schools in Brittany participated in a series of puzzles written by the technical community of Sopra Steria Rennes. Participating for the first time, me, Fabien Goardou and Romain Briend took fourth place in the competition. We will be back in force next year to bring the totem pole to our school, ESIR.'
	},
	{
		timeDate: new Date('2021-03'),
		title: 'SWERC 2020-2021',
		ranking: '96/107',
		description:
			'SWERC is a 5-hour programming competition for teams of three students (see rules), focusing on algorithmic problem solving and hands-on coding.'
	},
	{
		timeDate: new Date('2021-10'),
		title: 'Break The Code - Breizh Edition 2021',
		description:
			'90 students from 9 schools tried to solve the riddles written by the technical community of Sopra Steria Rennes.'
	},
	{
		timeDate: new Date('2022-04'),
		title: 'SWERC 2021-2022',
		description:
			'SWERC is a 5-hour programming competition for teams of three students (see rules), focusing on algorithmic problem solving and hands-on coding.',
		ranking: '93/97'
	},
	{
		timeDate: new Date('2022-06'),
		title: 'Internship at Huawei Paris Research Center',
		description:
			'A 3 month internship where I needed to implement of a network protocol on top of IPv6 using the Rust programming language.'
	}
].sort((a, b) => b.timeDate.getTime() - a.timeDate.getTime());

interface Year {
	text: string;
	events: Event[];
}

interface Event {
	timeDate: Date;
	title: string;
	description?: string;
}

/*
Group events by year
Format: Year[]
*/

const years: Year[] = [];

events.forEach((event) => {
	const year = event.timeDate.getFullYear();
	const yearIndex = years.findIndex((y) => y.text === year.toString());
	if (yearIndex === -1) {
		years.push(<Year>{
			text: year.toString(),
			events: [event]
		});
	} else {
		years[yearIndex].events.push(<Event>event);
	}
});
</script>


<MetaTags canonical='https://mael.app/timeline'
					description='Explore the professional journey of a skilled developer on the timeline page.'
					title='Timeline - Mael Kerichard'></MetaTags>


<main class='text-lg p-4 '>
	<div class='text-slate-50 max-w-6xl m-auto space-y-10'>
		<h1 class='text-5xl font-bold'>Timeline</h1>
		<ol class='relative border-l-[3px] border-slate-800 mt-4'>
			{#each years as year}
				<li class='mb-10 ml-6'>
					<h1 class='text-5xl font-bold border-b-[5px] pb-2 border-dotted'>{year.text}</h1>
				</li>

				<li class='mb-10 ml-6'>
					{#each year.events as event}
						<span
							class='absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-slate-900 text-xs'
						>
							<svg
								class='h-4 w-4 fill-white'
								xmlns='http://www.w3.org/2000/svg'
								data-name='Layer 1'
								viewBox='0 0 24 24'
							><path
								d='M21,4H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V4H3A1,1,0,0,0,2,5V8a4,4,0,0,0,4,4H7.54A6,6,0,0,0,11,13.91V16H10a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19a3,3,0,0,0-3-3H13V13.91A6,6,0,0,0,16.46,12H18a4,4,0,0,0,4-4V5A1,1,0,0,0,21,4ZM6,10A2,2,0,0,1,4,8V6H6V8a6,6,0,0,0,.35,2Zm8,8a1,1,0,0,1,1,1v1H9V19a1,1,0,0,1,1-1ZM16,8A4,4,0,0,1,8,8V4h8Zm4,0a2,2,0,0,1-2,2h-.35A6,6,0,0,0,18,8V6h2Z'
							/></svg
							>
						</span>
						{#if event.description}
							<div class='bg-slate-800 p-4 rounded-2xl border-2 border-slate-700 mb-5'>
								<header class='flex md:space-x-2 flex-col md:flex-row'>
									<h3 class='font-bold'>{event.title}</h3>
									<time class='text-white/50'
									>{event.timeDate.toLocaleString('en-US', {
										month: 'long',
										year: 'numeric'
									})}</time
									>
								</header>
								{#if event.ranking}
									<div class='text-sm bg-blue-500 px-1 p-0.5 rounded-md inline'>
										{event.ranking}
									</div>
								{/if}
								<p class='text-white/70'>
									{event.description}
								</p>
							</div>
						{:else}
							<header class='flex md:space-x-2 flex-col md:flex-row'>
								<h3 class='font-bold'>{event.title}</h3>
								<time class='text-white/50'
								>{event.timeDate.toLocaleString('en-US', {
									month: 'long',
									year: 'numeric'
								})}</time
								>
							</header>
						{/if}
					{/each}
				</li>
			{/each}
		</ol>
	</div>
</main>
