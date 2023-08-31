import {useQuery} from 'react-query';
import {fetchRandomQuote} from '../fetchers/externalFetchers';

/**
 * hook for fetching and caching dailyQuote
 */
function useDailyQuote() {
  const {isError, isSuccess, isLoading, data, error, refetch} = useQuery('randomQuote', () =>
    fetchRandomQuote(),
  {
    // 1 Day Caching
    staleTime: 86400000,
    refetchInterval: 86400000,
    cacheTime: 86400000,
    retry: 0,
  });

  const dailyQuote = data;
  return {isLoading, isError, isSuccess, dailyQuote, error, refetch};
}

export default useDailyQuote;
