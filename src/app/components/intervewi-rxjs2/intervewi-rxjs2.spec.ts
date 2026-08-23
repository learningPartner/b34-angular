import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervewiRxjs2 } from './intervewi-rxjs2';

describe('IntervewiRxjs2', () => {
  let component: IntervewiRxjs2;
  let fixture: ComponentFixture<IntervewiRxjs2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervewiRxjs2],
    }).compileComponents();

    fixture = TestBed.createComponent(IntervewiRxjs2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
