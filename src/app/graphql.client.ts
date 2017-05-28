import {ApolloClient, createNetworkInterface } from 'apollo-client';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  }),
});
