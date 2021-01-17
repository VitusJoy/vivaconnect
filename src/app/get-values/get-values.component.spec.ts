import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetValuesComponent } from './get-values.component';

describe('GetValuesComponent', () => {
  let component: GetValuesComponent;
  let fixture: ComponentFixture<GetValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
