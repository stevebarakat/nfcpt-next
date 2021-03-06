import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  // gql,
} from "@apollo/client";

export const client = new ApolloClient({
  // uri: "http://northfloridachiropracticphysicaltherapy.crt/graphql",
  uri: "https://old.northfloridachiropracticphysicaltherapy.com/graphql",
  cache: new InMemoryCache(),
});
