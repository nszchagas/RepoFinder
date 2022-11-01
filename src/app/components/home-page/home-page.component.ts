import {Component, OnInit} from '@angular/core';
import {RepositoryGraphlqService} from '../../service/repository-graphlq.service';
import {ApolloQueryResult} from '@apollo/client/core';
import {GraphQLRepositoryResponse} from '../../../types/graphQLRepositoryResponse';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private readonly service: RepositoryGraphlqService) {
    this.service.listRepositories(5).then(
      (r: ApolloQueryResult<GraphQLRepositoryResponse>) => {
        console.log(r);

      }
    )
  }

  public busca() {
    this.service.listRepositories(5);
  }
}
