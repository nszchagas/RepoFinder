import {Injectable} from '@angular/core';
import {Apollo, Subscription} from 'apollo-angular';
import {ApolloQueryResult, gql} from '@apollo/client/core';
import {Repository} from '../../types/repository';
import {GraphQLRepositoryResponse} from '../../types/graphQLRepositoryResponse';
import {Observable} from 'rxjs';


const GET_REPOSITORIES = gql`
  query ($count: Int){
    viewer {
      repositories(last: $count) {
        nodes {
          name,
          updatedAt,
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


//.valueChanges.subscribe({
//       next: ({data, loading}) => {
//         const v = data as GraphQLRepositoryResponse;
//         console.log(v.viewer.repositories.nodes);
//         return v.viewer.repositories.nodes;
//       },
//       error: (error) => console.log(error[0])
//     })
