import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApolloClient from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const httpLink = new HttpLink({
  uri: '__SIMPLE_API_ENDPOINT__',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={ListPage} />
      <Route path="/create" component={CreatePage} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
