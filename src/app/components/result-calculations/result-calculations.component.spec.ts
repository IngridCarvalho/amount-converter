import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCalculationsComponent } from './result-calculations.component';

describe('ResultCalculationsComponent', () => {
  let component: ResultCalculationsComponent;
  let fixture: ComponentFixture<ResultCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCalculationsComponent ]
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
