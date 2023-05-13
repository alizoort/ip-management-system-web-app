import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWrapperComponent } from './login-wrapper.component';

describe('LoginWrapperComponent', () => {
  let component: LoginWrapperComponent;
  let fixture: ComponentFixture<LoginWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWrapperComponent]
    });
    fixture = TestBed.createComponent(LoginWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
