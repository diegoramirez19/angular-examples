import { Injector, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

    constructor(private injector: Injector) { }

    transform(term: string): string {
        if (term) {
            const translationService = this.injector.get(TranslationService);
            return translationService.translate(term);
        }
        return term;
    }
}
