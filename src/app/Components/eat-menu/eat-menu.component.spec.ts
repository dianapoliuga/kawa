import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatMenuComponent } from './eat-menu.component';

describe('EatMenuComponent', () => {
  let component: EatMenuComponent;
  let fixture: ComponentFixture<EatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
