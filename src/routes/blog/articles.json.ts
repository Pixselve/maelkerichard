export async function get() {

	const modules = import.meta.glob(`./**/*.md`);
	const postPromises = [];
	for (let [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((post) => ({
			...post.metadata,
			path
		}));

		postPromises.push(promise);
	}

	const articles = await Promise.all(postPromises);

	const articlesWithPath = articles.map(article => {
		const {path,dateCreated, ...rest} = article
		// remove file extension from path
		return {...rest, path: path.replace(/\.md$/, ''), dateCreated: new Date(dateCreated)};
	})

	const sortedByDates = articlesWithPath.sort((a, b) => b.dateCreated - a.dateCreated);


	return {
		body: JSON.stringify(sortedByDates)
	};
}
