import useReviewWorkItemsUpdate from '../../hooks/useReviewWorkItemsUpdate';
import {WorkItemCardList} from '../workday';
import {WorkItemStates} from '../../constants/constants';
import {useMemo} from 'react';
import {useIntl} from 'react-intl';

const DayReview = () => {
  const intl = useIntl();
  const {isLoading, isError, data} = useReviewWorkItemsUpdate();

  const reviewWorkItems = useMemo(() =>
    data?.filter((e) => e.state === WorkItemStates.TODO ||
    e.state === WorkItemStates.DONE), [data]);

  if (isLoading) return <>Loading</>;
  if (isError) return <>error</>;

  return (
    <>
      {
        reviewWorkItems &&
        <WorkItemCardList
          heading={intl.formatMessage({id: 'reviewHeading'})}
          workItems={reviewWorkItems}
        />
      }
    </>
  );
};

export default DayReview;
