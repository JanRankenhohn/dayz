import {Outlet} from 'react-router';
import MenuAppBar from '../features/navigation/MenuAppBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
/**
 * App Layout
 * Includes AppBar
 * @returns
 */
export default function AppLayout() {
  return (
    <>
      <MenuAppBar icon={<ArrowBackIcon />} />
      <Outlet />
    </>
  );
}
