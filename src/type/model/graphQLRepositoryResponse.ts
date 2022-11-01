import {Repository} from './repository';

// The viewer graphql query returns an object of
// the type viewer containing info about the git info, including a repositories list.
// This type maps the response type.

export type GraphQLRepositoryResponse = {
  viewer: { repositories: { nodes: Repository[] } };
}
