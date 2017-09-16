import 'isomorphic-fetch';

export async function getResults(baseUrl, params) {
  try {
    const res = await fetch(`${baseUrl}/?${params}`);
    const results = await res.json();
    return results.results;
  } catch (error) {
    console.log('An error occurred: ', error);
  }
}

export async function getPerson(baseUrl, id) {
  try {
    const res = await fetch(`${baseUrl}/${id}`);
    const results = await res.json();
    return results;
  } catch (error) {
    console.log('An error occurred: ', error);
  }
}
