import Secrets from '../types/Secrets';

const secrets: Secrets = {
  pixbayApiKey: import.meta.env['VITE_PIXBAY_API_KEY'],
};

export default secrets;
