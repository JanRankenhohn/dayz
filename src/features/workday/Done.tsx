import {WorkItemCardList} from '.';
import {WorkItemStates} from '../../constants/constants';
import useTodayWorkItemsUpdate from '../../hooks/useTodayWorItemsUpdate';

const Done = () => {
  const {isLoading, isError, data} = useTodayWorkItemsUpdate();

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  const doneWorkItems = data?.filter((e) => e.state === WorkItemStates.DONE);

  return (
    <>
      {
        doneWorkItems && <WorkItemCardList workItems={doneWorkItems} />
      }
    </>
  );
};

export default Done;
