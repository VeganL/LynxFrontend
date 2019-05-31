import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPage } from './accept.page';

describe('AcceptPage', () => {
  let component: AcceptPage;
  let fixture: ComponentFixture<AcceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
