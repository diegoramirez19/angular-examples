import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageNgTranslateComponent } from './language-ng-translate.component';

describe('LanguageNgTranslateComponent', () => {
  let component: LanguageNgTranslateComponent;
  let fixture: ComponentFixture<LanguageNgTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageNgTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageNgTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
