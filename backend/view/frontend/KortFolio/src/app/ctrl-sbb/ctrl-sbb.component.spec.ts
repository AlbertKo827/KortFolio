import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlSBBComponent } from './ctrl-sbb.component';

describe('CtrlSBBComponent', () => {
  let component: CtrlSBBComponent;
  let fixture: ComponentFixture<CtrlSBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlSBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlSBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
