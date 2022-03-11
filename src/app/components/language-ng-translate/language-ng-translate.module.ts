import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LanguageNgTranslateComponent } from './language-ng-translate.component';
import { FormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LanguageNgTranslateComponent }
]

@NgModule({
  declarations: [
    LanguageNgTranslateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      defaultLanguage: 'en-GB',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    LanguageNgTranslateComponent
  ]
})
export class LanguageNgTranslateModule { }
