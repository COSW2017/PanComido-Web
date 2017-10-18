import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailPageComponent } from './dish-detail-page.component';

describe('DishDetailPageComponent', () => {
  let component: DishDetailPageComponent;
  let fixture: ComponentFixture<DishDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
