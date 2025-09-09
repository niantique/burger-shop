import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHomeButton } from './back-home-button';

describe('BackHomeButton', () => {
  let component: BackHomeButton;
  let fixture: ComponentFixture<BackHomeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackHomeButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackHomeButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
