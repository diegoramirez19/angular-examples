import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
]

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CalendarModule { }
