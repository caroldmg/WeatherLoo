import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavLocationsComponent } from './fav-locations.component';

describe('FavLocationsComponent', () => {
  let component: FavLocationsComponent;
  let fixture: ComponentFixture<FavLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavLocationsComponent]
    });
    fixture = TestBed.createComponent(FavLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
