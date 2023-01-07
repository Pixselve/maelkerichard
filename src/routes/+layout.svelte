<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import "../app.postcss";
</script>

<svelte:head>
  <SvelteSeo title="Mael Kerichard"
             description="A french student enrolled in an engineering degree in computer science."
             openGraph={{
               title: 'Mael Kerichard',
              description: 'A french student enrolled in an engineering degree in computer science.',
              url: 'https://mael.app',
              type: 'website',
              images: [
                  {
                    url: 'https://mael.app/social.png',
                    width: 2388,
                    height: 720,
                    alt: 'Mael Kerichard'
                  }
     ]
             }}
             twitter={{
              site: "@Pixselve",
              title: "Mael Kerichard",
              description: "A french student enrolled in an engineering degree in computer science.",
              url: 'https://mael.app/social.png',
              alt: 'Mael Kerichard'
  }}
             jsonLd={{
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

             }}
  ></SvelteSeo>
</svelte:head>

<main class="min-h-screen bg-slate-900 flex flex-col">
  <nav class="text-slate-50 p-4">
    <div class="flex justify-end space-x-10 max-w-6xl m-auto">
      <a class="text-xl font-bold uppercase" href="/">🏠 Home</a>
      <a class="text-xl font-bold uppercase" href="/projects">🗂️ Projects</a>
    </div>
  </nav>


  <slot></slot>


</main>
