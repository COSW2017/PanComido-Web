import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditPageComponent } from './restaurant-edit-page.component';

describe('RestaurantEditPageComponent', () => {
  let component: RestaurantEditPageComponent;
  let fixture: ComponentFixture<RestaurantEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
