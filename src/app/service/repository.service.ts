import {Injectable} from '@angular/core';
import {Repository} from '../type/model/repository';
import {RepositoryFilter} from '../type/filter/repository-filter';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public filterList(repositories: Repository[], filter: RepositoryFilter = {}): Repository[] {
    return repositories.filter(repository => {
        const filterVisibility = repository.visibility.includes("PUBLIC")
        const filterName = filter.name ? repository.name.toLowerCase().includes(filter.name?.toLowerCase()) : true;
        const filterArchived = (filter.isArchived !== undefined && filter.isArchived !== null) ? repository.isArchived === filter.isArchived : true;
        let filterDate = true;
        if (filter.pushedAtStart) {
          filterDate = this.compareDates(filter.pushedAtStart, repository.pushedAt) < 0
        }
        if (filter.pushedAtEnd) {
          filterDate = this.compareDates(filter.pushedAtEnd, repository.pushedAt) > 0
        }
        // return filterVisibility && filterName && filterArchived && filterDate
        return filterVisibility && filterName && filterArchived;
      }
    )
  }

// Returns a negative number if the first date is smaller than the second,
// zero if they're equal and a negative number if the first one is
// greater.
  private compareDates(firstDate: Date, secondDate: Date) {
    return firstDate.getTime().valueOf() - secondDate.getTime().valueOf()
  }


}
