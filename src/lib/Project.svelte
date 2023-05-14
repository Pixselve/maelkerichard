<div itemscope itemtype='https://schema.org/SoftwareApplication'
		 class='space-y-4 border-blue-500/20 border-2 rounded-md p-4'>
	<header class='space-y-4'>
		<h2 itemprop='name' class='font-bold text-2xl'>{project.name}</h2>

		<div class='flex space-x-2 flex-wrap'>
			{#each project.tags as tag}
				<div class='inline text-sm bg-blue-500/20 px-1 p-0.5 rounded-md'>{tag}</div>
			{/each}
		</div>


		<!--    <ul class="flex space-x-1">-->
		<!--      {#each project.links as link}-->
		<!--        <li class="span"><a rel="noreferrer" itemprop="url" class="text-blue-500 font-bold" target="_blank"-->
		<!--                            href="{link.url}">{link.name}</a></li>-->
		<!--      {/each}-->
		<!--    </ul>-->
	</header>
	<p itemprop='abstract'>{project.description}</p>

	<div class='flex space-x-2 flex-wrap'>
		{#each project.links as link}
			<a rel='noreferrer' itemprop='url'
				 class="px-4 py-2 rounded-md flex items-center gap-2 transition-colors hover:text-gray-300 hover:fill-gray-300 fill-white {link.type === LinkType.Preview ? 'bg-blue-600 hover:bg-blue-700' : '' }"
				 target='_blank'
				 href='{link.url}'>
				{#if link.type === LinkType.Preview}
					<svg class='h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>eye-outline</title>
						<path
							d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' />
					</svg>
				{/if}

				{#if link.type === LinkType.Github}
					<svg class='h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>github</title>
						<path
							d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
					</svg>
				{/if}

				{#if link.type === LinkType.External}
					<svg class='h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>open-in-new</title>
						<path
							d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' />
					</svg>
				{/if}


				<span>{link.name}</span>


			</a>
		{/each}
	</div>

</div>

<script lang='ts'>
import type { ProjectType } from '../routes/projects/projects';
import { LinkType } from '../routes/projects/projects';

export let project: ProjectType;
</script>

<style>
    .span::before {
        content: '• ';
    }

    .span:first-child::before {
        content: '';
    }
</style>
