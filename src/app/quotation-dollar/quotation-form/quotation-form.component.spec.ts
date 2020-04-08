import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuotationFormComponent } from './quotation-form.component';
import { FormBuilder } from '@angular/forms';

describe('QuotationFormComponent', () => {
  let component: QuotationFormComponent;
  let fixture: ComponentFixture<QuotationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ QuotationFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
