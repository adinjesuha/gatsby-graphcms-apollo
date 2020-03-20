import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api-uswest.graphcms.com/v1/ck363nwn700z101b4fb8j3tq5/master",
    fetch,
  }),
})

export default client
