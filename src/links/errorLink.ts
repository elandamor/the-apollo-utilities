import { ErrorResponse, onError } from "@apollo/client/link/error";
import { formatError } from "../utilities/formatError";
import { formatMessage } from "../utilities/formatMessage";

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation }: ErrorResponse) => {
    if (graphQLErrors) {
      const errorType = "graphQLError";
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      graphQLErrors.map(({ message, path }) => {
        const error = formatError(message, path);
        console.log(...error);
        return { message, path };
      });

      console.groupEnd();
    }

    if (networkError) {
      const errorType = "networkError";
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      const error = formatError(networkError.message);
      console.log(...error);

      console.groupEnd();
    }
  }
);
