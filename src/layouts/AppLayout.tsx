import {Outlet} from 'react-router';
import MenuAppBar from '../features/navigation/MenuAppBar';
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
