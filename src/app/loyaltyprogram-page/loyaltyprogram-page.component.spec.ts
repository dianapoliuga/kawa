import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyprogramPageComponent } from './loyaltyprogram-page.component';

describe('LoyaltyprogramPageComponent', () => {
  let component: LoyaltyprogramPageComponent;
  let fixture: ComponentFixture<LoyaltyprogramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyprogramPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltyprogramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
