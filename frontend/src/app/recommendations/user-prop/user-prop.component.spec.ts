import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPropComponent } from './user-prop.component';

describe('UserPropComponent', () => {
  let component: UserPropComponent;
  let fixture: ComponentFixture<UserPropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPropComponent]
    });
    fixture = TestBed.createComponent(UserPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
