import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot([]),
          EffectsModule.forRoot([])
        ],
        declarations: [HomeContainerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
