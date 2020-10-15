import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const {
  useEffect,
  useState,
} = React;

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
    `).then(response => {
      if (!isMounted) return;
      console.log(response);
      setName(response.data.repository.name);
    }).catch(error => console.error(error));
  }, [fetchGraphQL]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{name !== null ? `Repository: ${name}` : "Loading"}</p>
      </header>
    </div>
  );
}

export default App;
