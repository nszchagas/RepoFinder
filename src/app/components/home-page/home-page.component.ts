import {Component, OnDestroy, ViewChild} from '@angular/core';
import {RepositoryGraphlqService} from '../../service/repository-graphlq.service';
import {ApolloError, ApolloQueryResult} from '@apollo/client/core';
import {GraphQLRepositoryResponse} from '../../type/model/graphQLRepositoryResponse';
import {Repository} from 'src/app/type/model/repository';
import {FilterFormComponent} from '../filter-form/filter-form.component';
import {Subscription} from 'rxjs';
import {RepositoryFilter} from '../../type/filter/repository-filter';
import {RepositoryService} from '../../service/repository.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy {

  public loading = true;
  public showTable = false;
  public repositories: Repository[] = [];
  private allRepositories: Repository[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private readonly snackBar: MatSnackBar,
              private readonly graphlqService: RepositoryGraphlqService,
              private readonly service: RepositoryService) {
    this.graphlqService.listRepositories(100).then(
      (response: ApolloQueryResult<GraphQLRepositoryResponse>) => {
        this.allRepositories = this.mapResponse(response.data);
        this.repositories = this.allRepositories;
        this.loading = response.loading;
        this.showTable = true;

      }
    ).catch((error: ApolloError) => {
      this.loading = false;
      this.openSnackBar(`Erro ao processar requisição.\n${error.message}`)
    })
  }

  @ViewChild(FilterFormComponent)
  set filterForm(filterForm: FilterFormComponent) {
    const subscription = filterForm.filterEvent.subscribe(filter => this.filterRepositories(filter))
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {duration: 1000});
  }

  private filterRepositories(filter: RepositoryFilter = {}) {
    this.repositories = this.service.filterList(this.allRepositories, filter);
  }

  private mapResponse(response: GraphQLRepositoryResponse): Repository[] {
    let nodes = response.viewer.repositories.nodes;
    return nodes.map(node =>
      ({...node, pushedAt: new Date(node.pushedAt)} as Repository));
  }
}
