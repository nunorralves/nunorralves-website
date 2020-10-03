import { useContext } from 'react';

import { LanguageContext, defaultLocale } from './LanguageProvider';
import { LangContent } from './content';

type UseTranslationResponse = {
  translate(key: string): string;
  locale: string;
};

export default function useTranslation(): UseTranslationResponse {
  const [locale] = useContext(LanguageContext);

  function translate(key: string) {
    if (!LangContent[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangContent[locale][key] || LangContent[defaultLocale][key] || '';
  }

  return { translate, locale };
}
