import {Component} from '@angular/core';
import {RepositoryGraphlqService} from './service/repository-graphlq.service';
import {GraphQLRepositoryResponse} from '../types/graphQLRepositoryResponse';
import {ApolloQueryResult} from '@apollo/client/core';
import {Repository} from '../types/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repofinder';



}
