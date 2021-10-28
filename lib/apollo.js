import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://northfloridachiropracticphysicaltherapy.crt/graphql",
  cache: new InMemoryCache(),
});
