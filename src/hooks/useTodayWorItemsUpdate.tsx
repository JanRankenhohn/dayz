import {useQuery} from 'react-query';
import {fetchTodayWorkItems} from '../fetchers/dbFetchers';
import WorkItem from '../types/WorkItem';
import {WorkItemStates} from '../constants/constants';

/**
 * hook for fetching and caching dailyQuote
 */
function useTodayWorkItemsUpdate() {
  const {isError, isSuccess, isLoading, data, error, refetch} =
    useQuery<WorkItem[]>('todayWorkItems', () =>
      fetchTodayWorkItems(),
    {
      staleTime: 10000,
      refetchInterval: 10000,
      cacheTime: 10000,
    });

  if (data) {
    data.forEach((workItem) => {
      workItem['removable'] = true;
      workItem['startable'] = workItem.state === WorkItemStates.TODO;
    });
  }

  return {isLoading, isError, isSuccess, data, error, refetch};
}

export default useTodayWorkItemsUpdate;
