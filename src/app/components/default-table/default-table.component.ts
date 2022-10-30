import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../../types/repository';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent implements OnInit {


  //@FIXME: remove hardcoded data after configuring requests to API.
  @Input()
  public dataSource: Repository[] = [
    {
      lastCommit: new Date(),
      arquivado: false, nome: 'Teste'
    },{
      lastCommit: new Date(),
      arquivado: true, nome: 'Segundo teste'
    }
  ];

  public displayedColumns: string[] = ['Nome', 'Data do último commit', 'Status'];


  constructor() {
  }

  ngOnInit(): void {
  }

}
