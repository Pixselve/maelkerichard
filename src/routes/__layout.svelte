<script lang='ts'>
import '../app.css';
import { page } from '$app/stores';
import NavBarLink from '$lib/NavBarLink.svelte';
import Logo from '$lib/Logo.svg';
</script>

<nav class='flex justify-between p-5 max-w-6xl m-auto'>
	<div>
		<img class='h-6' src={Logo} alt='Logo'>
	</div>
	<div class='space-x-10'>
		<NavBarLink href='/' active={$page.url.pathname === "/"}>Home</NavBarLink>
		<NavBarLink href='/blog' active={/\/blog(\/.*)*/g.test($page.url.pathname)}>Blog</NavBarLink>
	</div>
</nav>

<main class='max-w-6xl p-5 m-auto'>
	<slot />
</main>
