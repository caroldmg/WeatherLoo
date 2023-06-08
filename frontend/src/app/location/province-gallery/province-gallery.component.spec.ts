import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceGalleryComponent } from './province-gallery.component';

describe('ProvinceGalleryComponent', () => {
  let component: ProvinceGalleryComponent;
  let fixture: ComponentFixture<ProvinceGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvinceGalleryComponent]
    });
    fixture = TestBed.createComponent(ProvinceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
