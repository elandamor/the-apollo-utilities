import { ApolloLink, NextLink, Operation } from "@apollo/client";
import { formatMessage } from "./formatMessage";

export const loggerLink = new ApolloLink(
  (operation: Operation, forward: NextLink) => {
    const startTime = new Date().getTime();

    return forward(operation).map((result) => {
      // @ts-ignore - Property 'operation' does not exist on type 'FragmentDefinitionNode'
      const operationType = operation.query.definitions[0].operation;
      const elapsed = new Date().getTime() - startTime;

      const group = formatMessage(operationType, operation, elapsed);
      console.groupCollapsed(...group);

      console.log("INIT", operation);
      console.log("RESULT", result);

      console.groupEnd();

      return result;
    });
  }
);
