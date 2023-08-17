import {Outlet} from 'react-router';
import MenuAppBar from '../features/navigation/MenuBar';
import {Button} from '@mui/material';
import {useIntlUpdate} from '../lang/useIntlUpdate';

/**
 * App Layout
 * Includes AppBar
 * @returns
 */
export default function AppLayout() {
  const setLocale = useIntlUpdate();

  return (
    <>
      <MenuAppBar />
      <Button onClick={() => {
        setLocale('de-DE');
      }}>Moin</Button>
      <Outlet />
    </>
  );
}
