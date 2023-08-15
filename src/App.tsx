import './App.css';
import MenuAppBar from './features/navigation/MenuBar';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Main App entry point
 * @return App component
 */
function App() {
  return (
    <>
      <MenuAppBar icon={<MenuIcon />}></MenuAppBar>
    </>
  );
}

export default App;
