<script lang='ts'>
import '../app.postcss';
import Logo from '$lib/Logo.svg';
</script>

<nav class='flex justify-between p-5 max-w-6xl m-auto'>
	<div>
		<img class='h-6' src={Logo} alt='Logo'>
	</div>
</nav>

<main class='max-w-6xl p-5 m-auto'>
	<slot />
</main>
