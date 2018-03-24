import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResultComponent } from './contact-result.component';

describe('ContactResultComponent', () => {
  let component: ContactResultComponent;
  let fixture: ComponentFixture<ContactResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
