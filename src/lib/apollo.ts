import { ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
export const client = new ApolloClient({
  uri: 'http://localhost:8080/api/graphql',
  cache,
})
