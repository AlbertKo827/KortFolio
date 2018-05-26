import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownloadComponent } from './resume-download.component';

describe('ResumeDownloadComponent', () => {
  let component: ResumeDownloadComponent;
  let fixture: ComponentFixture<ResumeDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
