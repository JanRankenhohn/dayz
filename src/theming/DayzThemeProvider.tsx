import {useState} from 'react';
import {ThemeProvider} from '@mui/material';
import {ThemeUpdateContext} from './useThemeUpdate';
import themeNames from './themeNames';
import ReactComponentProps from '../types/ReactComponentProps';
import themes from './themes';

/**
 * Custome theme provider with update function
 */
const DayzThemeProvider = ({children}: ReactComponentProps) => {
  const [themeName, setThemeName] = useState(themeNames.DEFAULT);

  return (
    <ThemeProvider theme={themes[themeName]}>
      <ThemeUpdateContext.Provider value={setThemeName}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};

export default DayzThemeProvider;
