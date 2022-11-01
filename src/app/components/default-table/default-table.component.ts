import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {Repository} from '../../../type/model/repository';
import {formatDate, getLocaleDateFormat} from '@angular/common';
import {MatSort} from '@angular/material/sort';
import {RepositoryService} from '../../service/repository.service';
import {RepositoryFilter} from '../../../type/filter/repository-filter';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent implements AfterViewInit {


  @Input()
  public dataSource: Repository[] = [];

  @ViewChild('tableToSort') tableToSort = new MatSort()

  public displayedColumns: string[] = ['name', 'updatedAt', 'isArchived'];

  constructor(private readonly service: RepositoryService) {
    const filter: RepositoryFilter = {
      isArchived: false

    }
    service.filterList(this.dataSource, filter)
  }

  ngAfterViewInit() {
    // @TODO: arrumar o sort
    // this.dataSource.sort = this.tableToSort;
  }

}
