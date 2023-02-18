import { SiTypescript, SiJavascript, SiPython } from 'react-icons/si';

export const getIconByLanguage = (language: string) => {
  switch (language) {
    case 'TypeScript':
      return SiTypescript;
    case 'JavaScript':
      return SiJavascript;

    case 'Python':
      return SiPython;

    default:
      break;
  }
};
