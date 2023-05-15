import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnProcessWrapperComponent } from './bpmn-process-wrapper.component';

describe('BpmnProcessWrapperComponent', () => {
  let component: BpmnProcessWrapperComponent;
  let fixture: ComponentFixture<BpmnProcessWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpmnProcessWrapperComponent]
    });
    fixture = TestBed.createComponent(BpmnProcessWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
