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
