import { Component, OnInit } from '@angular/core';

import { ItemHome } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: ItemHome[] = [
    {
      text: 'Calendar',
      icon: 'calendar_today',
      url: 'calendar'
    },
    {
      text: 'I18n-js',
      icon: 'language',
      url: 'language'
    },
    {
      text: 'ngx-translate',
      icon: 'language',
      url: 'language-ng-translate'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
