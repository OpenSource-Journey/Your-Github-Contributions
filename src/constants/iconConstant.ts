import { IconType } from 'react-icons';
import {
  SiCss3,
  SiDart,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiPerl,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRuby,
  SiRust,
  SiSwift,
  SiTypescript,
} from 'react-icons/si';

export type LanguageIconMap = {
  [key: string]: IconType; // Replace any with the type of the icon component
};

export const LANGUAGE_ICON_MAP: LanguageIconMap = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  Python: SiPython,
  PHP: SiPhp,
  HTML: SiHtml5,
  CSS: SiCss3,
  Ruby: SiRuby,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Rust: SiRust,
  Perl: SiPerl,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Dart: SiDart,
};
