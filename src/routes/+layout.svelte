<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import "../app.postcss";
</script>

<svelte:head>
  <meta name="description" content="A french student enrolled in an engineering degree in computer science.">

  <meta property="og:url" content="https://mael.app">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Mael Kerichard">
  <meta property="og:description" content="A french student enrolled in an engineering degree in computer science.">
  <meta property="og:image" content="https://mael.app/social.png">

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="mael.app">
  <meta property="twitter:url" content="https://mael.app">
  <meta name="twitter:title" content="Mael Kerichard">
  <meta name="twitter:description" content="A french student enrolled in an engineering degree in computer science.">
  <meta name="twitter:image" content="https://mael.app/social.png">

  <SvelteSeo

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
