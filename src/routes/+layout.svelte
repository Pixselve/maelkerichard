<script lang='ts'>
import '../app.postcss';
import { JsonLd, MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags canonical='https://www.mael.app'
					description='A french student enrolled in an engineering degree in computer science.'
					openGraph={{
    type: 'website',
    url: 'https://mael.app',
    title: 'Mael Kerichard',
    description: 'A french student enrolled in an engineering degree in computer science.',
    images: [
      {
        url: 'https://mael.app/social.png',
        width: 2388,
        height: 720,
        alt: 'Mael Kerichard',
      },
    ]
  }}
					twitter='{{
							site: "@pixselve",
							card: "summary_large_image",
							title: "Mael Kerichard",
							description: "A french student enrolled in an engineering degree in computer science.",
							image: "https://mael.app/social.png",
							imageAlt: "Mael Kerichard",
							handle: "@pixselve"
						}}'></MetaTags>
<JsonLd schema={{
	                   '@type': 'Person',
	                    name: 'Mael Kerichard',
	                    url: 'https://mael.app',
	                    sameAs: [
	                      'https://www.linkedin.com/in/maelkerichard/',
	                      'https://github.com/Pixselve'
	                      ],
	                    image: 'https://mael.app/social.png',
	                    jobTitle: 'Computer Science Student',
	                    worksFor: {
	                      '@type': 'Organization',
	                      name: 'École supérieure d\'ingénieurs de Rennes (ESIR)'
	                    },
	                    address: {
	                      '@type': 'PostalAddress',
	                      addressLocality: 'Rennes',
	                      addressRegion: 'Brittany',
	                      postalCode: '35000',
	                      addressCountry: 'France'
	                    },


	}}></JsonLd>

<main class='min-h-screen bg-slate-900 flex flex-col'>
	<nav class='text-slate-50 p-4'>
		<div class='flex justify-around sm:justify-end sm:space-x-10 max-w-6xl m-auto'>
			<a class='sm:text-xl font-bold uppercase' href='/'>Home</a>
			<a class='sm:text-xl font-bold uppercase' href='/projects'>Projects</a>
			<a class='sm:text-xl font-bold uppercase' href='/timeline'>Timeline</a>
		</div>
	</nav>


	<slot></slot>


</main>
