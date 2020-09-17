import { Maybe } from "graphql/jsutils/Maybe";
import { prefersDarkMode } from "./prefersDarkMode";

export const formatError = (
  message: string,
  path?: Maybe<ReadonlyArray<string | number>>
) => {
  const color = prefersDarkMode()
    ? {
        light: "#AAA",
        dark: "#CCC",
      }
    : {
        light: "light",
        dark: "#333",
      };

  if (path) {
    const headerCss = [
      `color: ${color.light}; font-weight: lighter`, // title
      `color: ${color.dark}; font-weight: 600`, // message
      `color: ${color.light}; font-weight: lighter`, // on
      `color: ${color.dark}; font-weight: 600`, // path
      `color: ${color.light}; font-weight: lighter`, // request.
    ];

    const parts = ["%c message"];

    parts.push(`%c${message}`);
    parts.push("%con");
    parts.push(`%c${path.join(".")}`);
    parts.push("%crequest");

    return [parts.join(" "), ...headerCss];
  }

  const headerCss = [
    `color: ${color.light}; font-weight: lighter`, // title
    `color: ${color.dark}; font-weight: 600`, // message
  ];

  const parts = ["%c message"];

  parts.push(`%c${message}`);

  return [parts.join(" "), ...headerCss];
};
