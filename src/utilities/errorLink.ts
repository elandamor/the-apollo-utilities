import { onError } from "apollo-link-error";
import { formatError } from "./formatError";
import { formatMessage } from "./formatMessage";

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation }: any) => {
    if (graphQLErrors) {
      const errorType = "graphQLError";
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      graphQLErrors.map(({ message, path }: any) => {
        const error = formatError(message, path);
        console.log(...error);
        return { message, path };
      });

      // TODO: Check if removing argument breaks intended functionality.
      // @ts-ignore - Expects 0 arguments.
      console.groupEnd(...group);
    }

    if (networkError) {
      const errorType = "networkError";
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      const error = formatError(networkError.message);
      console.log(...error);

      // TODO: Check if removing argument breaks intended functionality.
      // @ts-ignore - Expects 0 arguments.
      console.groupEnd(...group);
    }
  }
);
