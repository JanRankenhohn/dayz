import settings from '../config/settings';

/**
 * fetching pixbay images from api querying "morning nature"
 */
export async function fetchPixbayImages(): Promise<any> {
  try {
    const response = await fetch(settings.pixbaySearchEndpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    throw new Error(`Error fetching data: ${error}`);
  }
}

/**
 * fetches random quote from zenquotes
 * @returns random quote
 */
export async function fetchRandomQuote(): Promise<any> {
  try {
    // const response = await fetch(settings.zenquotesEndpoint);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // console.log(response);

    const response = {'q': 'There is always risk, so learn to manage risk instead of avoiding it.', 'a': 'Robert Kiyosaki', 'h': '<blockquote>&ldquo;There is always risk, so learn to manage risk instead of avoiding it.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>'};
    return response;
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    throw new Error(`Error fetching data: ${error}`);
  }
}
