import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {gql} from '@apollo/client/core';


const GET_REPOSITORIES = gql`
  query ($count: Int){
    viewer {
      name,
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


  public listRepositories(count: number) {

    this.apollo.watchQuery<any>({
      query: GET_REPOSITORIES,
      variables: {
        count: count
      }
    }).valueChanges.subscribe({
      next: ({data, loading}) => {
        console.log(data);
        console.log(loading);
      },
      error: (error) => console.log(error[0])
    })
  }


}
