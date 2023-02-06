import { GITHUB_TOKEN } from '$env/static/private';

export async function getContributionGraph() {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${GITHUB_TOKEN}`
		},
		body: JSON.stringify({
			query: `
      query {
  user(login: "Pixselve"){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`
		})
	};

	const response = await fetch('https://api.github.com/graphql', options);
	if (!response.ok) throw new Error('Failed to fetch');
	return await response.json();
}
