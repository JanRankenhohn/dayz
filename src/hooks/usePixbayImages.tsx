import {useQuery} from 'react-query';
import {fetchPixbayImages} from '../fetchers/externalFetchers';
import PixbayImage from '../types/PixbayImage';
import {getRandomElement} from '../utils/collectionExtensions';

/**
 * hook for fetching and caching pixay images
 */
function useRandomPixbayImage() {
  const {isError, isSuccess, isLoading, data, error, refetch} = useQuery('pixbayImages', () =>
    fetchPixbayImages(),
  {
    // 1 Day Caching
    staleTime: 86400000,
    refetchInterval: 86400000,
    cacheTime: 86400000,
    retry: 0,
  });

  let randomImage:PixbayImage | undefined = undefined;
  if (data) {
    randomImage = getRandomElement(data.hits);
  }

  return {isLoading, isError, isSuccess, randomImage, error, refetch};
}

export default useRandomPixbayImage;
