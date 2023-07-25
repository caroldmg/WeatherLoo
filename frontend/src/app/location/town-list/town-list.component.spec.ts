import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownListComponent } from './town-list.component';

describe('TownListComponent', () => {
  let component: TownListComponent;
  let fixture: ComponentFixture<TownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TownListComponent]
    });
    fixture = TestBed.createComponent(TownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
