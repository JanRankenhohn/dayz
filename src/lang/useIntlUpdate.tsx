import {createContext, useContext, Dispatch, SetStateAction} from 'react';

export const IntlUpdateContext = createContext<Dispatch<SetStateAction<string>>>(() => {});

export const useIntlUpdate = () => {
  return useContext(IntlUpdateContext);
};
