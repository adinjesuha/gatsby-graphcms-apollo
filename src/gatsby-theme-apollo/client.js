import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.GATSBY_GRAPHCMS_API}`,
    fetch,
  }),
})

export default client
