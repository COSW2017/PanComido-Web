import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDishPageComponent } from './command-dish-page.component';

describe('CommandDishPageComponent', () => {
  let component: CommandDishPageComponent;
  let fixture: ComponentFixture<CommandDishPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDishPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
