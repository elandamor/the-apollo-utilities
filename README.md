# the-apollo-utilities

> Custom apollo links for use with ApolloGraphQL's apollo client

## What's included?

**queryLogger**

Logger for graphQL queries and mutations. Includes performance information.

**errorLogger**

Logger for graphQL and network errors

### Prerequisites

- Apollo Link.

### Usage

```javascript
import { errorLogger, queryLogger } from "the-apollo-utilities";

// ...
ApolloLink.from([
  errorLogger,
  queryLogger,
  // ...
]);
```

## Screenshots

### Query (expanded):

![Query Expanded](./docs/example-output.png)
![Query Expanded - Dark](./docs/example-output-dark.png)

### Mutation (expanded):

![Mutation Expanded](./docs/example-output-mutation.png)
![Mutation Expanded - Dark](./docs/example-output-mutation-dark.png)

### GraphQL Error (expanded):

![Mutation Expanded](./docs/example-output-graphQLError.png)
![Mutation Expanded - Dark](./docs/example-output-graphQLError-dark.png)

### Network Error (expanded):

![Mutation Expanded](./docs/example-output-networkError.png)
![Mutation Expanded - Dark](./docs/example-output-networkError-dark.png)
