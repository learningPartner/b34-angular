import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasocTransform } from './rxjs-basoc-transform';

describe('RxjsBasocTransform', () => {
  let component: RxjsBasocTransform;
  let fixture: ComponentFixture<RxjsBasocTransform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasocTransform],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsBasocTransform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
