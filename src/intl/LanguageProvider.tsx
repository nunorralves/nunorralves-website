import { createContext, useState } from 'react';

export const defaultLocale = 'en';
export const locales = ['en', 'pt'];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
