import {Outlet} from 'react-router';
import {DayNavigation} from '../features/navigation';

const DayLayout = () => {
  return (
    <>
      <Outlet />
      <DayNavigation />
    </>
  );
};

export default DayLayout;
