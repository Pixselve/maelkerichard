<script>
	import '../app.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Mael Kerichard</title>
	<meta name="title" content="Mael Kerichard" />
	<meta
		name="description"
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.maelkerichard.com/" />
	<meta property="og:title" content="Mael Kerichard" />
	<meta
		property="og:description"
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>
	<meta property="og:image" content="" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.maelkerichard.com/" />
	<meta property="twitter:title" content="Mael Kerichard" />
	<meta
		property="twitter:description"
		content="Bonjour ! My name is Mael, I'm a French student in computer science."
	/>
	<meta property="twitter:image" content="" />
</svelte:head>
<main class="xl:max-w-7xl p-7 mt-0 xl:mt-40 m-auto space-y-20 text-gray-800">
	<slot />
</main>
