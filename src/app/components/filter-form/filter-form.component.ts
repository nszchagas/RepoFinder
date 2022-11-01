import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RepositoryFilter} from '../../../type/filter/repository-filter';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {

  public filterForm: FormGroup;
  public updatedAt: FormGroup;
  public today = new Date();
  public month = this.today.getMonth();
  public year = this.today.getFullYear();

  constructor(private readonly formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      name: [null],
      isArchived: [null]
    })

    this.updatedAt = this.formBuilder.group({
      updatedAtStart: [null],
      updatedAtEnd: [null]
    })


  }

  get value() {
    const filter: RepositoryFilter =
      {...this.filterForm.value,
        ...this.updatedAt.value}
    console.log(filter);
    return filter;
  }

  public btnClick() {
    console.log(this.value);
  }

}
