import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const components = [
  MatListModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    components
  ],
  exports: [
    components
  ]
})
export class MaterialModule { }
