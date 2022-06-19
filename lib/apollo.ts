import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_URL}/api/tasks`,
    cache: new InMemoryCache(),
});

export default apolloClient;
