import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {RepositoryGraphlqService} from '../../service/repository-graphlq.service';
import {ApolloQueryResult} from '@apollo/client/core';
import {GraphQLRepositoryResponse} from '../../../type/model/graphQLRepositoryResponse';
import {Repository} from 'src/type/model/repository';
import {FilterFormComponent} from '../filter-form/filter-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy, AfterViewInit {

  public repositories: Repository[] = [];
  public loading = true;

  // @ViewChild(FilterFormComponent)
  // public filterForm: FilterFormComponent;

  constructor(private readonly service: RepositoryGraphlqService) {
    this.service.listRepositories(100).then(
      (response: ApolloQueryResult<GraphQLRepositoryResponse>) => {
        this.repositories = response.data.viewer.repositories.nodes;
        this.loading = response.loading;

      }
    )
  }

  ngAfterViewInit() {

  }

  public busca() {
    this.service.listRepositories(5);
  }

  ngOnDestroy() {


  }
}
