import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiReact,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiSwift,
  SiKotlin,
  SiRust,
  SiPerl,
  SiMysql,
  SiPostgresql,
  SiDart,
} from "react-icons/si";

export const getIconByLanguage = (language: string) => {
  switch (language) {
    case "TypeScript":
      return SiTypescript;
    case "JavaScript":
      return SiJavascript;
    case "React":
      return SiReact;
    case "Python":
      return SiPython;
    case "PHP":
      return SiPhp;
    case "HTML":
      return SiHtml5;
    case "CSS":
      return SiCss3;
    case "Ruby":
      return SiRuby;
    case "Swift":
      return SiSwift;
    case "Kotlin":
      return SiKotlin;
    case "Rust":
      return SiRust;
    case "Perl":
      return SiPerl;
    case "MySQL":
      return SiMysql;
    case "PostgreSQL":
      return SiPostgresql;
    case "Dart":
      return SiDart;

    default:
      break;
  }
};
