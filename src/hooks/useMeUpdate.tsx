import {useQuery} from 'react-query';
import {fetchMe} from '../fetchers/dbFetchers';

/**
 * hook for fetching and caching dailyQuote
 */
function useMeUpdate() {
  const {isError, isSuccess, isLoading, data, error, refetch} = useQuery('me', () =>
    fetchMe(),
  {
    // 1 Day Caching
    staleTime: 10000,
    refetchInterval: 10000,
    cacheTime: 10000,
  });

  return {isLoading, isError, isSuccess, data, error, refetch};
}

export default useMeUpdate;
