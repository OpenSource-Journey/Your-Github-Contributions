import { LanguageIconMap, LANGUAGE_ICON_MAP } from 'constants/iconConstant';

export const getIconByLanguage = (language: keyof LanguageIconMap) => {
  return LANGUAGE_ICON_MAP[language];
};
