import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {

  public filterForm: FormGroup;
  public lastCommit: FormGroup;
  // public status: FormControl;
  public today = new Date();
  public month = this.today.getMonth();
  public year = this.today.getFullYear();

  constructor(private readonly formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      name: [null],
      status: [null]
    })

    this.lastCommit = this.formBuilder.group({
      start: [new Date()],
      end: [new Date()]
    })

    // this.status = new FormControl([null]);
  }

  public btnClick() {
    console.log({...this.filterForm.value, ...this.lastCommit.value});
  }

}
