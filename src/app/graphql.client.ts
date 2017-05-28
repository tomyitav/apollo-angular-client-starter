import {ApolloClient, createNetworkInterface} from "apollo-client";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  }),
});

export function getClient(): ApolloClient {
  return client;
}
