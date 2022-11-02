import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RepositoryFilter} from '../../type/filter/repository-filter';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnDestroy {

  public filterForm: FormGroup;
  public pushedAt: FormGroup;
  public today = new Date();
  public month = this.today.getMonth();
  public year = this.today.getFullYear();

  @Output()
  public filterEvent: EventEmitter<RepositoryFilter> = new EventEmitter<RepositoryFilter>()

  private subscriptions: Subscription[] = []

  constructor(private readonly formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      name: [null],
      isArchived: [null]
    })
    this.pushedAt = this.formBuilder.group({
      pushedAtStart: [null],
      pushedAtEnd: [null]
    })

    const subscriptionFilter = this.filterForm.valueChanges.subscribe(
      () => this.filterEvent.emit(this.value)
    )

    const subscriptionDate = this.pushedAt.valueChanges.subscribe(
      () => this.filterEvent.emit(this.value)
    )
    this.subscriptions.push(subscriptionDate, subscriptionFilter)

  }

  get value(): RepositoryFilter {
    return ({
      ...this.filterForm.value, ...this.pushedAt.value
    }) as RepositoryFilter;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
