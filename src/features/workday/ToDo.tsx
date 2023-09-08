import {WorkItemCardList} from '.';
import {WorkItemStates} from '../../constants/constants';
import useTodayWorkItemsUpdate from '../../hooks/useTodayWorItemsUpdate';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useNavigate} from 'react-router';

const ToDo = () => {
  const {isLoading, isError, data} = useTodayWorkItemsUpdate();
  const navigate = useNavigate();

  const todoWorkItems = (data || []).filter((e) => e.state === WorkItemStates.TODO ||
  e.state == WorkItemStates.DOING);

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return (
    <>
      {
        todoWorkItems && <WorkItemCardList workItems={todoWorkItems} />
      }
      <IconButton
        edge="start"
        size="large"
        onClick={() => navigate('CreateWorkItem')}
        sx={{
          backgroundColor: 'white',
          width: '3.5rem', // Set the desired width
          height: '3.5rem', // Set the desired height
          padding: '0', // Remove any padding
          position: 'fixed',
          bottom: (t) => t.spacing(9),
          right: (t) => t.spacing(2),
        }}
      >
        <AddCircleIcon color='primary' sx={{fontSize: '3.5rem'}} />
      </IconButton>
    </>
  );
};

export default ToDo;
