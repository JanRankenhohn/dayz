import {WorkItemCardList} from '.';
import {WorkItemStates} from '../../constants/constants';
import useTodayWorkItemsUpdate from '../../hooks/useTodayWorItemsUpdate';

const ToDo = () => {
  const {isLoading, isError, data} = useTodayWorkItemsUpdate();

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  const todoWorkItems = data?.filter((e) => e.state === WorkItemStates.TODO ||
    e.state == WorkItemStates.DOING);

  return (
    <>
      {
        todoWorkItems && <WorkItemCardList workItems={todoWorkItems} />
      }
    </>
  );
};

export default ToDo;
