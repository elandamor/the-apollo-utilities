import { ApolloLink, NextLink, Operation } from "apollo-link";
import { formatMessage } from "./formatMessage";

export const loggerLink = new ApolloLink(
  (operation: Operation, forward?: NextLink): any => {
    const startTime = new Date().getTime();

    return (
      forward &&
      forward(operation).map((result) => {
        // @ts-ignore - TS infers FragmentDefinitionNode instead of OperationDefinitionNode
        const operationType = operation.query.definitions[0].operation;
        const elapsed = new Date().getTime() - startTime;

        const group = formatMessage(operationType, operation, elapsed);
        console.groupCollapsed(...group);

        console.log("INIT", operation);
        console.log("RESULT", result);

        // TODO: Check if removing argument breaks intended functionality.
        // @ts-ignore - Expects 0 arguments.
        console.groupEnd(...group);

        return result;
      })
    );
  }
);
