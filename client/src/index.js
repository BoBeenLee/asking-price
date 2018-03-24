import React from 'react';
import ReactDOM from 'react-dom';
import { split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_WS_SERVER,
    options: {
        reconnect: true
    }
});

const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_SERVER}/graphql`
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>), document.getElementById('root'));
registerServiceWorker();
