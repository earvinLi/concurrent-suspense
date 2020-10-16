import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {

  userPreloadedQuery,
} from 'react-relay/hooks';

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook" name: "relay") {
      name
    }
  }
`;

function App(props) {
  const data = userPreloadedQuery(RepositoryNameQuery, props.preloadedQuery)

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository.name}</p>
      </header>
    </div>
  );
}

export default App;
