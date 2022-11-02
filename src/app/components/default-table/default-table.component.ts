import {Component, Input} from '@angular/core';
import {Repository} from '../../type/model/repository';
import {RepositoryService} from '../../service/repository.service';
import {RepositoryFilter} from '../../type/filter/repository-filter';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent {


  @Input()
  public dataSource: Repository[] = [];


  public displayedColumns: string[] = ['name', 'pushedAt', 'isArchived'];

  constructor(private readonly service: RepositoryService) {
    const filter: RepositoryFilter = {
      isArchived: false
    }
    service.filterList(this.dataSource, filter)
  }

  get sortedData(): Repository[] {
    return this.dataSource?.slice();
  }

  public sortTable(event: any) {
    const active = event.active;
    const direction = (event.direction === 'asc') ? -1 : 1;
    return this.dataSource.sort((r1: Repository, r2: Repository) => {
      if (active === 'name') {
        return direction * (r1.name.localeCompare(r2.name));
      } else if (active === 'pushedAt') {
        return direction * (r1.pushedAt.getTime() - r2.pushedAt.getTime());
      } else {
        return 0;
      }
    })
  }
}
