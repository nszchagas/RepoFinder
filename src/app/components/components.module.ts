import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultTableComponent} from './default-table/default-table.component';
import {MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [
    DefaultTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule

  ]
})
export class ComponentsModule { }
