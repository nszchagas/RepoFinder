import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultTableComponent} from './default-table/default-table.component';
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort';
import {FilterFormComponent} from './filter-form/filter-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    DefaultTableComponent,
    FilterFormComponent,
    HomePageComponent
  ],
    exports: [
        DefaultTableComponent,
        FilterFormComponent,
        HomePageComponent
    ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule


  ]
})
export class ComponentsModule {
}
