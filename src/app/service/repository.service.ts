import {Injectable} from '@angular/core';
import {Repository} from '../../type/model/repository';
import {RepositoryFilter} from '../../type/filter/repository-filter';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public filterList(repositories: Repository[], filter: RepositoryFilter): Repository[] {
    repositories.filter(repository => {
      if (repository.visibility === "PUBLIC") {
        return false;
      }
      const filterName = filter.name ? repository.name.includes(filter.name) : true;
      const filterArchived = (filter.isArchived !== null) ? repository.isArchived === filter.isArchived : true;
      let filterDate = true;
      if (filter.updatedAtStart) {
        filterDate = this.compareDates(filter.updatedAtStart, repository.updatedAt) < 0
      }
      if (filter.updatedAtEnd) {
        filterDate = this.compareDates(filter.updatedAtEnd, repository.updatedAt) > 0
      }

      return filterName && filterArchived && filterDate
    })

    return repositories;
  }

  // Returns a negative number if the first date is smaller than the second,
  // zero if they're equal and a negative number if the first one is
  // greater.
  public compareDates(firstDate: Date, secondDate: Date) {
    return firstDate.getTime().valueOf() - secondDate.getTime().valueOf()

  }


}
