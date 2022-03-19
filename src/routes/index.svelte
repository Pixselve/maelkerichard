<script lang='ts'>
import FranceFlag from '../lib/icons/FranceFlag.svelte';
import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<script context='module'>
export const hydrate = false;
export const router = false;
</script>


<svelte:head>

	<!-- Primary Meta Tags -->
	<title>Mael Kerichard</title>
	<meta name='title' content='Mael Kerichard' />
	<meta
		name='description'
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://www.maelkerichard.com/' />
	<meta property='og:title' content='Mael Kerichard' />
	<meta
		property='og:description'
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>
	<meta property='og:image' content='' />

	<!-- Twitter -->
	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://www.maelkerichard.com/' />
	<meta property='twitter:title' content='Mael Kerichard' />
	<meta
		property='twitter:description'
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>
	<meta property='twitter:image' content='' />

</svelte:head>

<main class='mt-0 xl:mt-40 m-auto space-y-20 text-gray-800'>

	<header class='space-y-10'>
		<h1 class='text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-relaxed text-gray-900'>
			Bonjour ! My name is Mael, I'm a
			<FranceFlag class='w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 inline' />
			French student in computer science.
		</h1>

		<h2 class='text-2xl text-gray-600 leading-relaxed'>I love new technologies and start all my days with a dose of tech
			news. The people who love cats, I am in their group.</h2>
	</header>


	<div class='border-b-2 border-black border-opacity-10'></div>

	<section class='space-y-20 flex flex-col items-center'>
		<h2 class='text-5xl md:text-7xl xl:text-8xl font-bold'>Projects</h2>
		<div class='grid grid-cols-1 lg:grid-cols-2 gap-20 text-center'>
			<ProjectCard
				title='Kontrakt'
				imageURL='/kontrakt-logo.png'
				websiteURL='https://kontrakt.ecolepontpean.fr'
				githubURL='https://github.com/Pixselve/kontrakt-web'
				description='Realized at the request of a school teacher, in order to facilitate the remote work within the framework of the Covid-19 pandemic, Kontrakt is a tool allowing students to follow day after day the skills they have to validate' />
			<ProjectCard
				title='Renergie'
				imageURL='renergie-logo.svg'
				websiteURL='https://aa879ef8.web-f5y5.pages.dev'
				githubURL='https://github.com/Renergie-app'
				description='A project for the "TIPE", a common test for most of the admission exams to the scientific Grandes Ecoles. Kontrakt allow users to perform simulations for energy renovation.' />

		</div>

		<a target='_blank' class='text-gray-500 text-2xl hover:text-blue-600 hover:underline transition-all'
			 href='https://github.com/Pixselve'>Find more projects on GitHub</a>
	</section>


</main>

