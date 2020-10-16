import graphql from 'babel-plugin-relay/macro';

export default graphql`
  query QueryRepositoryNameQuery {
    repository(owner: "facebook" name: "relay") {
      name
    }
  }
`;
