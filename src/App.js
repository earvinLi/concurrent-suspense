import React from 'react';
import './App.css';
import { usePreloadedQuery } from 'react-relay/hooks';
import RepositoryNameQuery from './Query';

function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository.name}</p>
      </header>
    </div>
  );
}

export default App;
