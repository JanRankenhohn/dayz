import {useState} from 'react';
import DayzIntlProviderProps from './DayzIntlProviderProps';
import locales from './locales';
import {IntlProvider} from 'react-intl';
import {IntlUpdateContext} from './useIntlUpdate';
import messages from './messages';

/**
 * Custom Intl Provider with context to change locale
 */
const DayzIntlProvider = ({children}: DayzIntlProviderProps) => {
  const locale = locales.ENGLISH;
  const [currentLocale, setCurrentLocale] = useState(locale);

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={locales.ENGLISH}
    >
      <IntlUpdateContext.Provider value={setCurrentLocale}>
        {children}
      </IntlUpdateContext.Provider>
    </IntlProvider>
  );
};

export default DayzIntlProvider;
