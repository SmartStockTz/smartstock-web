import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopsPage } from '../pages/shops.page';

describe('LandingComponent', () => {
  let component: ShopsPage;
  let fixture: ComponentFixture<ShopsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
