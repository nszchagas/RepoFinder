import { Component } from '@angular/core';
import {RepositoryGraphlqService} from './service/repository-graphlq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repofinder';

  constructor(private readonly service: RepositoryGraphlqService) {
  }
  public busca() {
    this.service.listRepositories(5);
  }
}
