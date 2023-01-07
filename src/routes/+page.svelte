<script lang="ts">
	import logo from '$lib/assets/mael.png?w=300;400;500&format=webp&srcset';
</script>

<svelte:head>
	<title>Mael Kerichard</title>
</svelte:head>

<div class="h-full flex-grow flex justify-center bg-slate-900 p-4">
	<div class="xl:max-w-6xl m-auto xl:space-x-20 flex-col xl:flex-row items-center flex">
		<div class="space-y-10">
			<div class="bg-blue-600 p-2 rounded-md inline-block text-slate-50 font-bold">
				👋 Hi There! I'm Mael
			</div>
			<h1 class="text-5xl text-slate-50 font-bold">
				A 🇫🇷 french student enrolled in an engineering degree in computer science.
			</h1>
			<p class="text-slate-50 text-xl">
				I love learning and seek out new challenges. If it's software, websites, or problem-solving,
				I'm ready to help make your project a success.
			</p>
		</div>
		<img
			class="order-first xl:order-last mb-10 w-1/3"
			srcset={logo}
			type="image/webp"
			alt="Mael"
		/>
	</div>
</div>
