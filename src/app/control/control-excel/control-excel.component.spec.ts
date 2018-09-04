import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlExcelComponent } from './control-excel.component';

describe('ControlExcelComponent', () => {
  let component: ControlExcelComponent;
  let fixture: ComponentFixture<ControlExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
