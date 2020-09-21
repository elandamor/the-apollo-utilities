import { Operation } from "@apollo/client";
import { OperationTypeNode } from "graphql";
import { prefersDarkMode } from "./prefersDarkMode";

export const formatMessage = (
  type: OperationTypeNode | "graphQLError" | "networkError",
  operation: Operation,
  elapsed?: number
) => {
  const color = prefersDarkMode()
    ? {
        light: "#AAA",
        dark: "#DDD",
      }
    : {
        light: "gray",
        dark: "#222",
      };

  const headerCss = [
    `color: ${color.light}; font-weight: lighter`, // title
    `color: ${
      type === "query" ? "#02B875" : type === "mutation" ? "#03A9F4" : "#FF3567"
    };`, // type
    `color: ${color.dark};`, // operationName
  ];

  const parts = ["%c apollo"];

  parts.push(`%c${type}`);
  parts.push(`%c${operation.operationName}`);

  if (elapsed) {
    parts.push(`%c(in ${elapsed} ms)`);
    headerCss.push(`color: ${color.light}; font-weight: lighter;`); // time
  }

  return [parts.join(" "), ...headerCss];
};
