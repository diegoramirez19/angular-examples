import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguageModule)
  },
  {
    path: 'language-ng-translate',
    loadChildren: () => import('./language-ng-translate/language-ng-translate.module').then(m => m.LanguageNgTranslateModule)
  }
];

const components = [
  HomeComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
