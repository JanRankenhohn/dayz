import Secrets from '../types/Secrets';

const secrets: Secrets = {
  apiKey: import.meta.env['VITE_PIXBAY_API_KEY'],
};

export default secrets;
