import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerList } from './burger-list';

describe('BurgerList', () => {
  let component: BurgerList;
  let fixture: ComponentFixture<BurgerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
