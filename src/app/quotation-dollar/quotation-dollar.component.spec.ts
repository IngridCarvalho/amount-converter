import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDollarComponent } from './quotation-dollar.component';

describe('QuotationDollarComponent', () => {
  let component: QuotationDollarComponent;
  let fixture: ComponentFixture<QuotationDollarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationDollarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
