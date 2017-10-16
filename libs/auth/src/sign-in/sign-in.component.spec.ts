import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "@ets/shared/src/input/input.component";
import {SignInFormComponent} from "@ets/auth/src/sign-in-form/sign-in-form.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          StoreModule.forRoot([]),
          EffectsModule.forRoot([])
        ],
        declarations: [
          SignInComponent,
          SignInFormComponent,
          InputComponent
        ]
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
