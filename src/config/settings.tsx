import Settings from '../types/Settings';
import secrets from './secrets';

const settings : Settings = {
  pixbaySearchEndpoint: `https://pixabay.com/api/?key=${secrets.pixbayApiKey}&q=nature+morning&image_type=photo&safesearch=true`,
  zenquotesEndpoint: 'https://zenquotes.io/api/today',
};

export default settings;
