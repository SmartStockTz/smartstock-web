import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrivacyPage } from '../pages/privacy.page';

describe('PrivancyComponent', () => {
  let component: PrivacyPage;
  let fixture: ComponentFixture<PrivacyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
