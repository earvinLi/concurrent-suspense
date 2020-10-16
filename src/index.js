import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query src_indexRepositoryNameQuery {
    repository(owner: "facebook" name: "relay") {
      name
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery}/>
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
