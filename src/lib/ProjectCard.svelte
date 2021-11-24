<script lang='ts'>
export let title: string;
export let description: string;
export let imageURL: string;
export let githubURL: string;
export let websiteURL: string;
</script>

<div
	class='px-5 py-14 md:p-14 hover:shadow-xl transition-all hover:border border-black border-opacity-10 rounded-2xl space-y-10 flex items-center flex-col relative'
>
	<img class='w-32 object-cover' src={imageURL} alt='{title} logo' />
	<h4 class='font-bold text-4xl'>{title}</h4>
	<p class='text-opacity-70 text-gray-600'>{description}</p>
	<footer>
		<a target='_blank' href='{githubURL}' class='bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors'>GitHub</a>
		<a target='_blank' href='{websiteURL}' class='bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors'>Website</a>
	</footer>
</div>
