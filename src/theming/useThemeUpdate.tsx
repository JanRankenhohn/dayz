import {createContext, useContext, Dispatch, SetStateAction} from 'react';

export const ThemeUpdateContext = createContext<Dispatch<SetStateAction<string>>>(() => {});

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};
