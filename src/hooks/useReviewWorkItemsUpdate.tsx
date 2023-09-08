import {useQuery} from 'react-query';
import {fetchReviewWorkItems} from '../fetchers/dbFetchers';
import {WorkItemStates} from '../constants/constants';

/**
 * hook for fetching and caching dailyQuote
 */
function useReviewWorkItemsUpdate() {
  const {isError, isSuccess, isLoading, data, error, refetch} = useQuery('reviewWorkItems', () =>
    fetchReviewWorkItems(),
  {
    staleTime: 10000,
    refetchInterval: 10000,
    cacheTime: 10000,
  });

  if (data) {
    data.forEach((workItem) => {
      workItem['shiftable'] = workItem.state === WorkItemStates.TODO;
      workItem['removable'] = workItem.state === WorkItemStates.TODO;
    });
  }

  return {isLoading, isError, isSuccess, data, error, refetch};
}

export default useReviewWorkItemsUpdate;
