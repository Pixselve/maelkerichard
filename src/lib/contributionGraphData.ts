import { GITHUB_TOKEN } from '$env/static/private'

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
	try {
		const response = await fetch('https://api.github.com/graphql', options);
		if (!response.ok) throw new Error('Failed to fetch');
		return await response.json();
	} catch (e) {
		// fallback to static data
		console.warn('Failed to fetch contribution graph data, using static data instead');
		return contributionGraphData;
	}
}

const contributionGraphData = {
	data: {
		user: {
			contributionsCollection: {
				contributionCalendar: {
					totalContributions: 771,
					weeks: [
						{
							contributionDays: [
								{
									contributionCount: 4,
									date: '2022-01-02'
								},
								{
									contributionCount: 0,
									date: '2022-01-03'
								},
								{
									contributionCount: 0,
									date: '2022-01-04'
								},
								{
									contributionCount: 0,
									date: '2022-01-05'
								},
								{
									contributionCount: 3,
									date: '2022-01-06'
								},
								{
									contributionCount: 0,
									date: '2022-01-07'
								},
								{
									contributionCount: 0,
									date: '2022-01-08'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 3,
									date: '2022-01-09'
								},
								{
									contributionCount: 3,
									date: '2022-01-10'
								},
								{
									contributionCount: 0,
									date: '2022-01-11'
								},
								{
									contributionCount: 0,
									date: '2022-01-12'
								},
								{
									contributionCount: 0,
									date: '2022-01-13'
								},
								{
									contributionCount: 0,
									date: '2022-01-14'
								},
								{
									contributionCount: 0,
									date: '2022-01-15'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-01-16'
								},
								{
									contributionCount: 0,
									date: '2022-01-17'
								},
								{
									contributionCount: 0,
									date: '2022-01-18'
								},
								{
									contributionCount: 5,
									date: '2022-01-19'
								},
								{
									contributionCount: 0,
									date: '2022-01-20'
								},
								{
									contributionCount: 5,
									date: '2022-01-21'
								},
								{
									contributionCount: 2,
									date: '2022-01-22'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-01-23'
								},
								{
									contributionCount: 0,
									date: '2022-01-24'
								},
								{
									contributionCount: 0,
									date: '2022-01-25'
								},
								{
									contributionCount: 4,
									date: '2022-01-26'
								},
								{
									contributionCount: 5,
									date: '2022-01-27'
								},
								{
									contributionCount: 3,
									date: '2022-01-28'
								},
								{
									contributionCount: 1,
									date: '2022-01-29'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-01-30'
								},
								{
									contributionCount: 0,
									date: '2022-01-31'
								},
								{
									contributionCount: 7,
									date: '2022-02-01'
								},
								{
									contributionCount: 5,
									date: '2022-02-02'
								},
								{
									contributionCount: 1,
									date: '2022-02-03'
								},
								{
									contributionCount: 10,
									date: '2022-02-04'
								},
								{
									contributionCount: 0,
									date: '2022-02-05'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-02-06'
								},
								{
									contributionCount: 0,
									date: '2022-02-07'
								},
								{
									contributionCount: 0,
									date: '2022-02-08'
								},
								{
									contributionCount: 0,
									date: '2022-02-09'
								},
								{
									contributionCount: 0,
									date: '2022-02-10'
								},
								{
									contributionCount: 4,
									date: '2022-02-11'
								},
								{
									contributionCount: 0,
									date: '2022-02-12'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2022-02-13'
								},
								{
									contributionCount: 0,
									date: '2022-02-14'
								},
								{
									contributionCount: 0,
									date: '2022-02-15'
								},
								{
									contributionCount: 0,
									date: '2022-02-16'
								},
								{
									contributionCount: 2,
									date: '2022-02-17'
								},
								{
									contributionCount: 17,
									date: '2022-02-18'
								},
								{
									contributionCount: 2,
									date: '2022-02-19'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-02-20'
								},
								{
									contributionCount: 0,
									date: '2022-02-21'
								},
								{
									contributionCount: 0,
									date: '2022-02-22'
								},
								{
									contributionCount: 0,
									date: '2022-02-23'
								},
								{
									contributionCount: 0,
									date: '2022-02-24'
								},
								{
									contributionCount: 0,
									date: '2022-02-25'
								},
								{
									contributionCount: 1,
									date: '2022-02-26'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-02-27'
								},
								{
									contributionCount: 6,
									date: '2022-02-28'
								},
								{
									contributionCount: 3,
									date: '2022-03-01'
								},
								{
									contributionCount: 17,
									date: '2022-03-02'
								},
								{
									contributionCount: 0,
									date: '2022-03-03'
								},
								{
									contributionCount: 1,
									date: '2022-03-04'
								},
								{
									contributionCount: 0,
									date: '2022-03-05'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2022-03-06'
								},
								{
									contributionCount: 2,
									date: '2022-03-07'
								},
								{
									contributionCount: 1,
									date: '2022-03-08'
								},
								{
									contributionCount: 2,
									date: '2022-03-09'
								},
								{
									contributionCount: 0,
									date: '2022-03-10'
								},
								{
									contributionCount: 5,
									date: '2022-03-11'
								},
								{
									contributionCount: 5,
									date: '2022-03-12'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 3,
									date: '2022-03-13'
								},
								{
									contributionCount: 0,
									date: '2022-03-14'
								},
								{
									contributionCount: 4,
									date: '2022-03-15'
								},
								{
									contributionCount: 0,
									date: '2022-03-16'
								},
								{
									contributionCount: 0,
									date: '2022-03-17'
								},
								{
									contributionCount: 0,
									date: '2022-03-18'
								},
								{
									contributionCount: 7,
									date: '2022-03-19'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 6,
									date: '2022-03-20'
								},
								{
									contributionCount: 0,
									date: '2022-03-21'
								},
								{
									contributionCount: 0,
									date: '2022-03-22'
								},
								{
									contributionCount: 0,
									date: '2022-03-23'
								},
								{
									contributionCount: 0,
									date: '2022-03-24'
								},
								{
									contributionCount: 6,
									date: '2022-03-25'
								},
								{
									contributionCount: 5,
									date: '2022-03-26'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-03-27'
								},
								{
									contributionCount: 0,
									date: '2022-03-28'
								},
								{
									contributionCount: 0,
									date: '2022-03-29'
								},
								{
									contributionCount: 6,
									date: '2022-03-30'
								},
								{
									contributionCount: 0,
									date: '2022-03-31'
								},
								{
									contributionCount: 3,
									date: '2022-04-01'
								},
								{
									contributionCount: 0,
									date: '2022-04-02'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 11,
									date: '2022-04-03'
								},
								{
									contributionCount: 0,
									date: '2022-04-04'
								},
								{
									contributionCount: 0,
									date: '2022-04-05'
								},
								{
									contributionCount: 0,
									date: '2022-04-06'
								},
								{
									contributionCount: 0,
									date: '2022-04-07'
								},
								{
									contributionCount: 0,
									date: '2022-04-08'
								},
								{
									contributionCount: 0,
									date: '2022-04-09'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2022-04-10'
								},
								{
									contributionCount: 0,
									date: '2022-04-11'
								},
								{
									contributionCount: 0,
									date: '2022-04-12'
								},
								{
									contributionCount: 0,
									date: '2022-04-13'
								},
								{
									contributionCount: 0,
									date: '2022-04-14'
								},
								{
									contributionCount: 0,
									date: '2022-04-15'
								},
								{
									contributionCount: 0,
									date: '2022-04-16'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-04-17'
								},
								{
									contributionCount: 0,
									date: '2022-04-18'
								},
								{
									contributionCount: 0,
									date: '2022-04-19'
								},
								{
									contributionCount: 0,
									date: '2022-04-20'
								},
								{
									contributionCount: 0,
									date: '2022-04-21'
								},
								{
									contributionCount: 0,
									date: '2022-04-22'
								},
								{
									contributionCount: 0,
									date: '2022-04-23'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-04-24'
								},
								{
									contributionCount: 0,
									date: '2022-04-25'
								},
								{
									contributionCount: 0,
									date: '2022-04-26'
								},
								{
									contributionCount: 0,
									date: '2022-04-27'
								},
								{
									contributionCount: 1,
									date: '2022-04-28'
								},
								{
									contributionCount: 5,
									date: '2022-04-29'
								},
								{
									contributionCount: 0,
									date: '2022-04-30'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 9,
									date: '2022-05-01'
								},
								{
									contributionCount: 0,
									date: '2022-05-02'
								},
								{
									contributionCount: 1,
									date: '2022-05-03'
								},
								{
									contributionCount: 3,
									date: '2022-05-04'
								},
								{
									contributionCount: 0,
									date: '2022-05-05'
								},
								{
									contributionCount: 3,
									date: '2022-05-06'
								},
								{
									contributionCount: 0,
									date: '2022-05-07'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-05-08'
								},
								{
									contributionCount: 0,
									date: '2022-05-09'
								},
								{
									contributionCount: 5,
									date: '2022-05-10'
								},
								{
									contributionCount: 2,
									date: '2022-05-11'
								},
								{
									contributionCount: 1,
									date: '2022-05-12'
								},
								{
									contributionCount: 2,
									date: '2022-05-13'
								},
								{
									contributionCount: 3,
									date: '2022-05-14'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 7,
									date: '2022-05-15'
								},
								{
									contributionCount: 0,
									date: '2022-05-16'
								},
								{
									contributionCount: 0,
									date: '2022-05-17'
								},
								{
									contributionCount: 1,
									date: '2022-05-18'
								},
								{
									contributionCount: 31,
									date: '2022-05-19'
								},
								{
									contributionCount: 48,
									date: '2022-05-20'
								},
								{
									contributionCount: 0,
									date: '2022-05-21'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 3,
									date: '2022-05-22'
								},
								{
									contributionCount: 0,
									date: '2022-05-23'
								},
								{
									contributionCount: 2,
									date: '2022-05-24'
								},
								{
									contributionCount: 1,
									date: '2022-05-25'
								},
								{
									contributionCount: 0,
									date: '2022-05-26'
								},
								{
									contributionCount: 0,
									date: '2022-05-27'
								},
								{
									contributionCount: 0,
									date: '2022-05-28'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-05-29'
								},
								{
									contributionCount: 0,
									date: '2022-05-30'
								},
								{
									contributionCount: 0,
									date: '2022-05-31'
								},
								{
									contributionCount: 0,
									date: '2022-06-01'
								},
								{
									contributionCount: 0,
									date: '2022-06-02'
								},
								{
									contributionCount: 0,
									date: '2022-06-03'
								},
								{
									contributionCount: 0,
									date: '2022-06-04'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-06-05'
								},
								{
									contributionCount: 0,
									date: '2022-06-06'
								},
								{
									contributionCount: 0,
									date: '2022-06-07'
								},
								{
									contributionCount: 0,
									date: '2022-06-08'
								},
								{
									contributionCount: 0,
									date: '2022-06-09'
								},
								{
									contributionCount: 0,
									date: '2022-06-10'
								},
								{
									contributionCount: 0,
									date: '2022-06-11'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-06-12'
								},
								{
									contributionCount: 0,
									date: '2022-06-13'
								},
								{
									contributionCount: 0,
									date: '2022-06-14'
								},
								{
									contributionCount: 0,
									date: '2022-06-15'
								},
								{
									contributionCount: 0,
									date: '2022-06-16'
								},
								{
									contributionCount: 0,
									date: '2022-06-17'
								},
								{
									contributionCount: 0,
									date: '2022-06-18'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-06-19'
								},
								{
									contributionCount: 0,
									date: '2022-06-20'
								},
								{
									contributionCount: 0,
									date: '2022-06-21'
								},
								{
									contributionCount: 0,
									date: '2022-06-22'
								},
								{
									contributionCount: 0,
									date: '2022-06-23'
								},
								{
									contributionCount: 0,
									date: '2022-06-24'
								},
								{
									contributionCount: 0,
									date: '2022-06-25'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-06-26'
								},
								{
									contributionCount: 0,
									date: '2022-06-27'
								},
								{
									contributionCount: 0,
									date: '2022-06-28'
								},
								{
									contributionCount: 0,
									date: '2022-06-29'
								},
								{
									contributionCount: 0,
									date: '2022-06-30'
								},
								{
									contributionCount: 0,
									date: '2022-07-01'
								},
								{
									contributionCount: 0,
									date: '2022-07-02'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-07-03'
								},
								{
									contributionCount: 0,
									date: '2022-07-04'
								},
								{
									contributionCount: 0,
									date: '2022-07-05'
								},
								{
									contributionCount: 0,
									date: '2022-07-06'
								},
								{
									contributionCount: 0,
									date: '2022-07-07'
								},
								{
									contributionCount: 0,
									date: '2022-07-08'
								},
								{
									contributionCount: 0,
									date: '2022-07-09'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-07-10'
								},
								{
									contributionCount: 0,
									date: '2022-07-11'
								},
								{
									contributionCount: 0,
									date: '2022-07-12'
								},
								{
									contributionCount: 0,
									date: '2022-07-13'
								},
								{
									contributionCount: 0,
									date: '2022-07-14'
								},
								{
									contributionCount: 0,
									date: '2022-07-15'
								},
								{
									contributionCount: 0,
									date: '2022-07-16'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-07-17'
								},
								{
									contributionCount: 0,
									date: '2022-07-18'
								},
								{
									contributionCount: 0,
									date: '2022-07-19'
								},
								{
									contributionCount: 0,
									date: '2022-07-20'
								},
								{
									contributionCount: 0,
									date: '2022-07-21'
								},
								{
									contributionCount: 0,
									date: '2022-07-22'
								},
								{
									contributionCount: 0,
									date: '2022-07-23'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-07-24'
								},
								{
									contributionCount: 0,
									date: '2022-07-25'
								},
								{
									contributionCount: 0,
									date: '2022-07-26'
								},
								{
									contributionCount: 0,
									date: '2022-07-27'
								},
								{
									contributionCount: 0,
									date: '2022-07-28'
								},
								{
									contributionCount: 0,
									date: '2022-07-29'
								},
								{
									contributionCount: 0,
									date: '2022-07-30'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-07-31'
								},
								{
									contributionCount: 0,
									date: '2022-08-01'
								},
								{
									contributionCount: 0,
									date: '2022-08-02'
								},
								{
									contributionCount: 0,
									date: '2022-08-03'
								},
								{
									contributionCount: 0,
									date: '2022-08-04'
								},
								{
									contributionCount: 0,
									date: '2022-08-05'
								},
								{
									contributionCount: 0,
									date: '2022-08-06'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-08-07'
								},
								{
									contributionCount: 0,
									date: '2022-08-08'
								},
								{
									contributionCount: 0,
									date: '2022-08-09'
								},
								{
									contributionCount: 0,
									date: '2022-08-10'
								},
								{
									contributionCount: 0,
									date: '2022-08-11'
								},
								{
									contributionCount: 1,
									date: '2022-08-12'
								},
								{
									contributionCount: 0,
									date: '2022-08-13'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-08-14'
								},
								{
									contributionCount: 0,
									date: '2022-08-15'
								},
								{
									contributionCount: 4,
									date: '2022-08-16'
								},
								{
									contributionCount: 0,
									date: '2022-08-17'
								},
								{
									contributionCount: 0,
									date: '2022-08-18'
								},
								{
									contributionCount: 0,
									date: '2022-08-19'
								},
								{
									contributionCount: 0,
									date: '2022-08-20'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-08-21'
								},
								{
									contributionCount: 0,
									date: '2022-08-22'
								},
								{
									contributionCount: 0,
									date: '2022-08-23'
								},
								{
									contributionCount: 0,
									date: '2022-08-24'
								},
								{
									contributionCount: 0,
									date: '2022-08-25'
								},
								{
									contributionCount: 0,
									date: '2022-08-26'
								},
								{
									contributionCount: 0,
									date: '2022-08-27'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-08-28'
								},
								{
									contributionCount: 0,
									date: '2022-08-29'
								},
								{
									contributionCount: 0,
									date: '2022-08-30'
								},
								{
									contributionCount: 0,
									date: '2022-08-31'
								},
								{
									contributionCount: 0,
									date: '2022-09-01'
								},
								{
									contributionCount: 0,
									date: '2022-09-02'
								},
								{
									contributionCount: 0,
									date: '2022-09-03'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-09-04'
								},
								{
									contributionCount: 0,
									date: '2022-09-05'
								},
								{
									contributionCount: 0,
									date: '2022-09-06'
								},
								{
									contributionCount: 0,
									date: '2022-09-07'
								},
								{
									contributionCount: 0,
									date: '2022-09-08'
								},
								{
									contributionCount: 0,
									date: '2022-09-09'
								},
								{
									contributionCount: 0,
									date: '2022-09-10'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-09-11'
								},
								{
									contributionCount: 2,
									date: '2022-09-12'
								},
								{
									contributionCount: 0,
									date: '2022-09-13'
								},
								{
									contributionCount: 0,
									date: '2022-09-14'
								},
								{
									contributionCount: 5,
									date: '2022-09-15'
								},
								{
									contributionCount: 0,
									date: '2022-09-16'
								},
								{
									contributionCount: 1,
									date: '2022-09-17'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 4,
									date: '2022-09-18'
								},
								{
									contributionCount: 11,
									date: '2022-09-19'
								},
								{
									contributionCount: 2,
									date: '2022-09-20'
								},
								{
									contributionCount: 0,
									date: '2022-09-21'
								},
								{
									contributionCount: 2,
									date: '2022-09-22'
								},
								{
									contributionCount: 4,
									date: '2022-09-23'
								},
								{
									contributionCount: 2,
									date: '2022-09-24'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-09-25'
								},
								{
									contributionCount: 0,
									date: '2022-09-26'
								},
								{
									contributionCount: 0,
									date: '2022-09-27'
								},
								{
									contributionCount: 0,
									date: '2022-09-28'
								},
								{
									contributionCount: 0,
									date: '2022-09-29'
								},
								{
									contributionCount: 2,
									date: '2022-09-30'
								},
								{
									contributionCount: 4,
									date: '2022-10-01'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-10-02'
								},
								{
									contributionCount: 1,
									date: '2022-10-03'
								},
								{
									contributionCount: 9,
									date: '2022-10-04'
								},
								{
									contributionCount: 1,
									date: '2022-10-05'
								},
								{
									contributionCount: 0,
									date: '2022-10-06'
								},
								{
									contributionCount: 2,
									date: '2022-10-07'
								},
								{
									contributionCount: 0,
									date: '2022-10-08'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 2,
									date: '2022-10-09'
								},
								{
									contributionCount: 1,
									date: '2022-10-10'
								},
								{
									contributionCount: 1,
									date: '2022-10-11'
								},
								{
									contributionCount: 0,
									date: '2022-10-12'
								},
								{
									contributionCount: 3,
									date: '2022-10-13'
								},
								{
									contributionCount: 8,
									date: '2022-10-14'
								},
								{
									contributionCount: 0,
									date: '2022-10-15'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-10-16'
								},
								{
									contributionCount: 11,
									date: '2022-10-17'
								},
								{
									contributionCount: 2,
									date: '2022-10-18'
								},
								{
									contributionCount: 2,
									date: '2022-10-19'
								},
								{
									contributionCount: 6,
									date: '2022-10-20'
								},
								{
									contributionCount: 5,
									date: '2022-10-21'
								},
								{
									contributionCount: 9,
									date: '2022-10-22'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-10-23'
								},
								{
									contributionCount: 3,
									date: '2022-10-24'
								},
								{
									contributionCount: 0,
									date: '2022-10-25'
								},
								{
									contributionCount: 0,
									date: '2022-10-26'
								},
								{
									contributionCount: 0,
									date: '2022-10-27'
								},
								{
									contributionCount: 4,
									date: '2022-10-28'
								},
								{
									contributionCount: 0,
									date: '2022-10-29'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-10-30'
								},
								{
									contributionCount: 1,
									date: '2022-10-31'
								},
								{
									contributionCount: 0,
									date: '2022-11-01'
								},
								{
									contributionCount: 0,
									date: '2022-11-02'
								},
								{
									contributionCount: 10,
									date: '2022-11-03'
								},
								{
									contributionCount: 0,
									date: '2022-11-04'
								},
								{
									contributionCount: 0,
									date: '2022-11-05'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-11-06'
								},
								{
									contributionCount: 3,
									date: '2022-11-07'
								},
								{
									contributionCount: 9,
									date: '2022-11-08'
								},
								{
									contributionCount: 0,
									date: '2022-11-09'
								},
								{
									contributionCount: 13,
									date: '2022-11-10'
								},
								{
									contributionCount: 14,
									date: '2022-11-11'
								},
								{
									contributionCount: 0,
									date: '2022-11-12'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-11-13'
								},
								{
									contributionCount: 5,
									date: '2022-11-14'
								},
								{
									contributionCount: 6,
									date: '2022-11-15'
								},
								{
									contributionCount: 0,
									date: '2022-11-16'
								},
								{
									contributionCount: 0,
									date: '2022-11-17'
								},
								{
									contributionCount: 4,
									date: '2022-11-18'
								},
								{
									contributionCount: 16,
									date: '2022-11-19'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 4,
									date: '2022-11-20'
								},
								{
									contributionCount: 0,
									date: '2022-11-21'
								},
								{
									contributionCount: 6,
									date: '2022-11-22'
								},
								{
									contributionCount: 10,
									date: '2022-11-23'
								},
								{
									contributionCount: 0,
									date: '2022-11-24'
								},
								{
									contributionCount: 0,
									date: '2022-11-25'
								},
								{
									contributionCount: 0,
									date: '2022-11-26'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2022-11-27'
								},
								{
									contributionCount: 32,
									date: '2022-11-28'
								},
								{
									contributionCount: 1,
									date: '2022-11-29'
								},
								{
									contributionCount: 0,
									date: '2022-11-30'
								},
								{
									contributionCount: 9,
									date: '2022-12-01'
								},
								{
									contributionCount: 6,
									date: '2022-12-02'
								},
								{
									contributionCount: 2,
									date: '2022-12-03'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2022-12-04'
								},
								{
									contributionCount: 2,
									date: '2022-12-05'
								},
								{
									contributionCount: 8,
									date: '2022-12-06'
								},
								{
									contributionCount: 8,
									date: '2022-12-07'
								},
								{
									contributionCount: 2,
									date: '2022-12-08'
								},
								{
									contributionCount: 20,
									date: '2022-12-09'
								},
								{
									contributionCount: 1,
									date: '2022-12-10'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 5,
									date: '2022-12-11'
								},
								{
									contributionCount: 6,
									date: '2022-12-12'
								},
								{
									contributionCount: 4,
									date: '2022-12-13'
								},
								{
									contributionCount: 20,
									date: '2022-12-14'
								},
								{
									contributionCount: 17,
									date: '2022-12-15'
								},
								{
									contributionCount: 0,
									date: '2022-12-16'
								},
								{
									contributionCount: 0,
									date: '2022-12-17'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 12,
									date: '2022-12-18'
								},
								{
									contributionCount: 0,
									date: '2022-12-19'
								},
								{
									contributionCount: 0,
									date: '2022-12-20'
								},
								{
									contributionCount: 0,
									date: '2022-12-21'
								},
								{
									contributionCount: 0,
									date: '2022-12-22'
								},
								{
									contributionCount: 0,
									date: '2022-12-23'
								},
								{
									contributionCount: 0,
									date: '2022-12-24'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: '2022-12-25'
								},
								{
									contributionCount: 0,
									date: '2022-12-26'
								},
								{
									contributionCount: 0,
									date: '2022-12-27'
								},
								{
									contributionCount: 0,
									date: '2022-12-28'
								},
								{
									contributionCount: 0,
									date: '2022-12-29'
								},
								{
									contributionCount: 0,
									date: '2022-12-30'
								},
								{
									contributionCount: 0,
									date: '2022-12-31'
								}
							]
						},
						{
							contributionDays: [
								{
									contributionCount: 1,
									date: '2023-01-01'
								},
								{
									contributionCount: 16,
									date: '2023-01-02'
								},
								{
									contributionCount: 16,
									date: '2023-01-03'
								},
								{
									contributionCount: 12,
									date: '2023-01-04'
								},
								{
									contributionCount: 23,
									date: '2023-01-05'
								},
								{
									contributionCount: 8,
									date: '2023-01-06'
								},
								{
									contributionCount: 12,
									date: '2023-01-07'
								}
							]
						}
					]
				}
			}
		}
	}
};