import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

/**
 * This hook stores the previous path
 * @returns current locationUrl
 */
function usePreviousPageUrl() {
  const navigate = useNavigate();
  const location = useLocation();
  const [previousPageUrl, setPreviousPageUrl] = useState('/');

  useEffect(() => {
    // Update the previous page URL whenever the route changes
    setPreviousPageUrl(location.pathname);
  }, [location]);

  const goBack = () => {
    navigate(previousPageUrl || '/');
  };

  return {previousPageUrl, goBack};
}

export default usePreviousPageUrl;
