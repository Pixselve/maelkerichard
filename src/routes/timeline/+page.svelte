<script lang='ts'>
import MetaTags from '$lib/MetaTags.svelte';
import SvelteMarkdown from 'svelte-markdown'
import ListElement from './ListElement.svelte';

const events: Event[] = [
	{
		type: 'work',
		start: new Date('2019-09'),
		title: 'Join the École Supérieure d\'Ingénieurs de Rennes'
	},
	{
		type: 'competition',
		start: new Date('2020-09'),
		ranking: '4th place',
		title: 'Break The Code - Breizh Edition 2020',
		description:
			'In this 2020 edition, 126 students from 13 schools in Brittany participated in a series of puzzles written by the technical community of Sopra Steria Rennes. Participating for the first time, me, Fabien Goardou and Romain Briend took fourth place in the competition. We will be back in force next year to bring the totem pole to our school, ESIR.'
	},
	{
		type: 'competition',
		start: new Date('2021-03'),
		title: 'SWERC 2020-2021',
		ranking: '96/107',
		description:
			'SWERC is a 5-hour programming competition for teams of three students (see rules), focusing on algorithmic problem solving and hands-on coding.'
	},
	{
		type: 'competition',
		start: new Date('2021-10'),
		title: 'Break The Code - Breizh Edition 2021',
		description:
			'90 students from 9 schools tried to solve the riddles written by the technical community of Sopra Steria Rennes.'
	},
	{
		type: 'competition',
		start: new Date('2022-04'),
		title: 'SWERC 2021-2022',
		description:
			'SWERC is a 5-hour programming competition for teams of three students (see rules), focusing on algorithmic problem solving and hands-on coding.',
		ranking: '93/97'
	},
	{
		logo: '/timeline-icons/huawei.svg',
		type: 'work',
		start: new Date('2022-06'),
		end: new Date('2022-08-31'),
		title: 'Internship at Huawei Paris Research Center',
		description:
			'A 3 month internship where I needed to implement of a network protocol on top of IPv6 using the Rust programming language.'
	},
	{
		logo: '/timeline-icons/nuit-de-linfo.png',
		type: 'competition',
		start: new Date('2022-12'),
		title: 'Nuit de l\'Info 2022',
		ranking: '1st place a challenge',
		description:
			'Nuit de l\'Info is a national 24-hour programming competition for teams of students. The goal is to build an application that follows a theme given by the organization. After that, you can opt in to multiple challenges proposed by companies. We won the challenge "You will become an export in GitLab CI/CD documentation" by R2Devops. We had to make a GitLab CI/CD documentation generator.'
	},
	{
		type: 'competition',
		start: new Date('2023-03'),
		title: 'ESIR Game Jam 2023',
		ranking: '1st place',
		description:
			'My team and I won the ESIR Game Jam 2023 with our game "Thumbthing\'s Wrong". It\'s a multiplayer game made with Unreal Engine. A player is on PC and has to jump from platform to platform and up to 4 players on a mobile web app who have to help (or not) the main player to advance using cards that break the rules of the game.'
	},
	{
		logo: '/timeline-icons/amazon.svg',
		type: 'work',
		start: new Date('2023-06'),
		end: new Date('2023-09-30'),
		title: 'Internship as a Software Development Engineer at Amazon Dublin',
		description:
			`As a Software Development Engineer Intern at Amazon, I contributed to the development and deployment of a data-driven workflow.

**Responsibilities:**
- Developed and implemented backend functionalities utilizing AWS services such as Lambda, DynamoDB, S3, and Redshift.
- Wrote and executed unit tests and integration tests to ensure the software's reliability and performance.
- Assisted in the architecture and deployment of cloud infrastructure using AWS Cloud Development Kit (CDK) and AWS CloudFormation.
- Participated in the setup and maintenance of CI/CD pipelines to automate testing and deployment processes.

**Achievements:**
- Successfully applied Amazon's Leadership Principles, emphasizing customer obsession, ownership, and long-term thinking.

**Skills Gained:**
- Gained in-depth knowledge of AWS services and cloud architectures.
- Improved software testing and automation skills through hands-on experience with CI/CD pipelines.
- Developed effective collaboration and communication skills by working in a fast-paced, agile environment.
- Honed problem-solving skills and learned best practices for software development from industry experts.`
	},
	{
		type: "work",
		start: new Date('2024-03'),
		end: new Date('2024-09'),
		title: "End of studies internship",
	},
	{
		type: 'work',
		logo: '/timeline-icons/esir.svg',
		start: new Date('2024-09'),
		title: 'Graduate from the École Supérieure d\'Ingénieurs de Rennes',
		description:
			'🎉 Graduate from the École Supérieure d\'Ingénieurs de Rennes with a Engineering degree in Computer Science and Information Systems.'
	}
].sort((a, b) => b.start.getTime() - a.start.getTime());

interface Year {
	text: string;
	events: Event[];
}

interface Event {
	start: Date;
	title: string;
	description?: string;
	logo?: string;
	type: string;
	ranking?: string;
	end?: Date;
}

/*
Group events by year
Format: Year[]
*/

const years: Year[] = [];

events.forEach((event) => {
	const year = event.start.getFullYear();
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

<MetaTags
	canonical='https://mael.app/timeline'
	description='Explore the professional journey of a skilled developer on the timeline page.'
	title='Timeline - Mael Kerichard'
/>

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
							{#if event.type === 'competition'}
								<svg
									class='h-4 w-4 fill-white'
									xmlns='http://www.w3.org/2000/svg'
									data-name='Layer 1'
									viewBox='0 0 24 24'
								><path
									d='M21,4H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V4H3A1,1,0,0,0,2,5V8a4,4,0,0,0,4,4H7.54A6,6,0,0,0,11,13.91V16H10a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19a3,3,0,0,0-3-3H13V13.91A6,6,0,0,0,16.46,12H18a4,4,0,0,0,4-4V5A1,1,0,0,0,21,4ZM6,10A2,2,0,0,1,4,8V6H6V8a6,6,0,0,0,.35,2Zm8,8a1,1,0,0,1,1,1v1H9V19a1,1,0,0,1,1-1ZM16,8A4,4,0,0,1,8,8V4h8Zm4,0a2,2,0,0,1-2,2h-.35A6,6,0,0,0,18,8V6h2Z'
								/></svg
								>
							{/if}
							{#if event.type === 'work'}
								<svg
									class='h-4 w-4 fill-white'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
								><title>briefcase-outline</title><path
									d='M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z'
								/></svg
								>
							{/if}
						</span>
						{#if event.description}
							<div class='bg-slate-800 p-4 rounded-2xl border-2 border-slate-700 mb-5 space-y-4'>
								<div class='flex gap-4 items-center'>
									{#if event.logo}
										<img height='50' width='50' src={event.logo} alt='Event logo'>
									{/if}
									<div>
										<header class='flex md:space-x-2 flex-col md:flex-row'>
											<h3 class='font-bold'>{event.title}</h3>
											<div class='text-white/50'>
												<time
												>{event.start.toLocaleString('en-US', {
													month: 'long',
													year: 'numeric'
												})}</time
												>
												{#if event.end}
													<span>-</span>
													<time>{event.end.toLocaleString('en-US', {
														month: 'long',
														year: 'numeric'
													})}</time>
													<span>({Math.floor((event.end.getTime() - event.start.getTime()) / (1000 * 60 * 60 * 24 * 30))} months)</span>
												{/if}
											</div>
										</header>
										{#if event.ranking}
											<div class='text-sm bg-blue-500 px-1 p-0.5 rounded-md inline'>
												{event.ranking}
											</div>
										{/if}

									</div>
								</div>

								<p class='text-white/70'>
									<SvelteMarkdown renderers={{list: ListElement}} source={event.description} />
								</p>
							</div>
						{:else}
							<header class='flex md:space-x-2 flex-col md:flex-row'>
								<h3 class='font-bold'>{event.title}</h3>
								<div class='text-white/50'>
									<time
									>{event.start.toLocaleString('en-US', {
										month: 'long',
										year: 'numeric'
									})}</time
									>
									{#if event.end}
										<span>-</span>
										<time>{event.end.toLocaleString('en-US', {
											month: 'long',
											year: 'numeric'
										})}</time>
										<span>({Math.floor((event.end.getTime() - event.start.getTime()) / (1000 * 60 * 60 * 24 * 30))} months)</span>
									{/if}
								</div>
							</header>
						{/if}
					{/each}
				</li>
			{/each}
		</ol>
	</div>
</main>
