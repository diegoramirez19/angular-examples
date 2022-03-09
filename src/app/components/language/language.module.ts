import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material.module';

import { LanguageComponent } from './language.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LanguageComponent },
];

@NgModule({
  declarations: [
    LanguageComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LanguageModule { }
