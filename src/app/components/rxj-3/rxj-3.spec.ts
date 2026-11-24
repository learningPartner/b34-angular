import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxj3 } from './rxj-3';

describe('Rxj3', () => {
  let component: Rxj3;
  let fixture: ComponentFixture<Rxj3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxj3],
    }).compileComponents();

    fixture = TestBed.createComponent(Rxj3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
