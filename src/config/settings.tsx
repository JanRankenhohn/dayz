import Settings from '../types/Settings';
import secrets from './secrets';

const settings : Settings = {
  pixbaySearchEndpoint: `https://pixabay.com/api/?key=
    ${secrets.apiKey}&q=nature+morning&image_type=photo&safesearch=true`,
};

export default settings;
