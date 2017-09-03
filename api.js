import 'isomorphic-fetch';

export default async function getResults(baseUrl, params) {
  console.log('inside api call...')
  try {
    const res = await fetch(`${baseUrl}/?${params}`);
    const results = await res.json();
    return results.results;
  } catch (error) {
    console.log('An error occurred: ', error);
  }

}
