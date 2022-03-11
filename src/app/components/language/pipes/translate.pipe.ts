import { Pipe, PipeTransform } from '@angular/core';
import { InternationalizationService } from '../services/internationalization.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private international: InternationalizationService) { }

  transform(value: string): string {
    return this.international.strings(value);
  }

}
