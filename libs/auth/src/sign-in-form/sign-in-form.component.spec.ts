import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormComponent } from './sign-in-form.component';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {InputComponent} from "@ets/shared/src/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          StoreModule.forRoot([]),
          EffectsModule.forRoot([])
        ],
        declarations: [SignInFormComponent, InputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call function submit', () => {
    spyOn(component, 'submit');
    component.submit(component.signInForm);
    component.submit(component.signInForm);
    expect(component.submit).toHaveBeenCalled();
  });
});
