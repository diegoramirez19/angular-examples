import { Component } from '@angular/core';
import { InternationalizationService } from './components/language/services/internationalization.service';
import { TranslationService } from './components/language/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private internazionalization: InternationalizationService,
    private translation: TranslationService,
  ) {
    this.internazionalization.chargeInternationalization();
    /*
      I need to know where I can init the service
    */
   this.translation.init();
  }

}
