import {Component, Input} from '@angular/core';
import {Repository} from '../../../types/repository';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent {


  //@FIXME: remove hardcoded data after configuring requests to API.
  @Input()
  public dataSource: Repository[] = [
    {
      lastCommit: new Date(),
      arquivado: false, name: 'Teste'
    }, {
      lastCommit: new Date(),
      arquivado: true, name: 'Segundo teste'
    }
  ];

  public displayedColumns: string[] = ['name', 'lastCommit', 'status'];


  public getDisplayableDate(date: Date) {
    return date.toLocaleDateString("pt-BR")
  }
}
