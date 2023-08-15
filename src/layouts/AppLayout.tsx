import {Outlet} from 'react-router';
import MenuAppBar from '../features/navigation/MenuBar';

/**
 * App Layout
 * Includes AppBar
 * @returns
 */
export default function AppLayout() {
  return (
    <>
      <MenuAppBar />
      <Outlet />
    </>
  );
}
