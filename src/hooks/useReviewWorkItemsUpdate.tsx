import {useQuery} from 'react-query';
import {fetchReviewWorkItems} from '../fetchers/dbFetchers';

/**
 * hook for fetching and caching dailyQuote
 */
function useReviewWorkItemsUpdate() {
  const {isError, isSuccess, isLoading, data, error, refetch} = useQuery('reviewWorkItems', () =>
    fetchReviewWorkItems(),
  {
    // 1 Day Caching
    staleTime: 10000,
    refetchInterval: 10000,
    cacheTime: 10000,
  });

  return {isLoading, isError, isSuccess, data, error, refetch};
}

export default useReviewWorkItemsUpdate;
