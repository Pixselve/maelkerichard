<script lang='ts'>
import '../app.postcss';
import '../app.css';
</script>

<main class='min-h-screen bg-slate-900 flex flex-col'>
	<nav class='text-slate-50 p-4'>
		<div class='flex justify-around sm:justify-end sm:space-x-10 max-w-6xl m-auto'>
			<a class='sm:text-xl font-bold uppercase' href='/'>Home</a>
			<a class='sm:text-xl font-bold uppercase' href='/projects'>Projects</a>
			<a class='sm:text-xl font-bold uppercase' href='/timeline'>Timeline</a>
			<a class='sm:text-xl font-bold uppercase' href='/blog'>Blog</a>
		</div>
	</nav>

	<slot />
</main>
