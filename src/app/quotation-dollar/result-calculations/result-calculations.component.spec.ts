import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCalculationsComponent } from './result-calculations.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResultCalculationsComponent', () => {
  let component: ResultCalculationsComponent;
  let fixture: ComponentFixture<ResultCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCalculationsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
