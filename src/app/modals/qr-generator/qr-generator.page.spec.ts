import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGeneratorPage } from './qr-generator.page';

describe('QrGeneratorPage', () => {
  let component: QrGeneratorPage;
  let fixture: ComponentFixture<QrGeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrGeneratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
