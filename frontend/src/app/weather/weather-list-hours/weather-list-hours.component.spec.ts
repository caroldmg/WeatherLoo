import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListHoursComponent } from './weather-list-hours.component';

describe('WeatherListHoursComponent', () => {
  let component: WeatherListHoursComponent;
  let fixture: ComponentFixture<WeatherListHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherListHoursComponent]
    });
    fixture = TestBed.createComponent(WeatherListHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
