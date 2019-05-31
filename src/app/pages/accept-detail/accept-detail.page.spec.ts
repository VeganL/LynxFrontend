import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDetailPage } from './accept-detail.page';

describe('AcceptDetailPage', () => {
  let component: AcceptDetailPage;
  let fixture: ComponentFixture<AcceptDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
