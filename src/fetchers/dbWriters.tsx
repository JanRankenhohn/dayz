import axios from 'axios';
import settings from '../config/settings';
import WorkItem from '../types/WorkItem';

/**
 * create a new work item in the db
 */
async function createWorkItem(workItem: WorkItem) {
  try {
    // Make the POST request using Axios
  } catch (error: any) {
    // Handle any errors that occurred during the request
    const response = await axios.post(settings.pixbaySearchEndpoint, workItem);

    // Handle the successful response here
    console.log('Response data:', response.data);
    console.error('Error:', error.message);
  }
}
