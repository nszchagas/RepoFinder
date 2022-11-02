// The viewer graphql query returns an object of
// the type viewer containing info about the git info, including a repositories list.
// This type maps the response type.

export type GraphQLRepositoryResponse = {
  viewer: { repositories: { nodes: nodeRepository[] } };
}

type nodeRepository = {
  isArchived: boolean;
  name: string;
  pushedAt: string;
  visibility: string;
}
