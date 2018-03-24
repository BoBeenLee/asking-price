import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>), document.getElementById('root'));
registerServiceWorker();
