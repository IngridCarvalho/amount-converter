import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationValueComponent } from './quotation-value.component';

describe('QuotationValueComponent', () => {
  let component: QuotationValueComponent;
  let fixture: ComponentFixture<QuotationValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
