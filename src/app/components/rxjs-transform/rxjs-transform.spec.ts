import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTransform } from './rxjs-transform';

describe('RxjsTransform', () => {
  let component: RxjsTransform;
  let fixture: ComponentFixture<RxjsTransform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTransform],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsTransform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
