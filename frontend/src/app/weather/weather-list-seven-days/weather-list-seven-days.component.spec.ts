import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListSevenDaysComponent } from './weather-list-seven-days.component';

describe('WeatherListSevenDaysComponent', () => {
  let component: WeatherListSevenDaysComponent;
  let fixture: ComponentFixture<WeatherListSevenDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherListSevenDaysComponent]
    });
    fixture = TestBed.createComponent(WeatherListSevenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
