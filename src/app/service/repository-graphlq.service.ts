import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ApolloQueryResult, gql} from '@apollo/client/core';
import {GraphQLRepositoryResponse} from '../type/model/graphQLRepositoryResponse';


const GET_REPOSITORIES = gql`
  query ($count: Int){
    viewer {
      repositories(last: $count) {
        nodes {
          name,
          pushedAt,
          visibility,
          isArchived
        }
      }
    }
  }`

@Injectable({
  providedIn: 'root'
})
export class RepositoryGraphlqService {

  constructor(private readonly apollo: Apollo) {
  }

  public listRepositories(count: number): Promise<ApolloQueryResult<GraphQLRepositoryResponse>> {
    return this.apollo.watchQuery<any>({
      query: GET_REPOSITORIES,
      variables: {
        count: count
      }
    }).result()
  }
}
