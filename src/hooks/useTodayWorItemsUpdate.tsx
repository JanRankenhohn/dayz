import {useQuery} from 'react-query';
import {fetchTodayWorkItems} from '../fetchers/dbFetchers';
import WorkItem from '../types/WorkItem';

/**
 * hook for fetching and caching dailyQuote
 */
function useTodayWorkItemsUpdate() {
  const {isError, isSuccess, isLoading, data, error, refetch} =
    useQuery<WorkItem[]>('todayWorkItems', () =>
      fetchTodayWorkItems(),
    {
    // 1 Day Caching
      staleTime: 10000,
      refetchInterval: 10000,
      cacheTime: 10000,
    });

  return {isLoading, isError, isSuccess, data, error, refetch};
}

export default useTodayWorkItemsUpdate;
