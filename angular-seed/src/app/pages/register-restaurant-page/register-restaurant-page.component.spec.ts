import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestaurantPageComponent } from './register-restaurant-page.component';

describe('RegisterRestaurantPageComponent', () => {
  let component: RegisterRestaurantPageComponent;
  let fixture: ComponentFixture<RegisterRestaurantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRestaurantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
