import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionRendererComponent } from './submission-renderer.component';

describe('SubmissionRendererComponent', () => {
  let component: SubmissionRendererComponent;
  let fixture: ComponentFixture<SubmissionRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionRendererComponent]
    });
    fixture = TestBed.createComponent(SubmissionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
