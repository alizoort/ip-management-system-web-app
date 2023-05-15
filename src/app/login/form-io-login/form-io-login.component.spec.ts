import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIoLoginComponent } from './form-io-login.component';

describe('FormIoLoginComponent', () => {
  let component: FormIoLoginComponent;
  let fixture: ComponentFixture<FormIoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIoLoginComponent]
    });
    fixture = TestBed.createComponent(FormIoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
