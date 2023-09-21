import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourRecommendationComponent } from './hour-recommendation.component';

describe('HourRecommendationComponent', () => {
  let component: HourRecommendationComponent;
  let fixture: ComponentFixture<HourRecommendationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourRecommendationComponent]
    });
    fixture = TestBed.createComponent(HourRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
