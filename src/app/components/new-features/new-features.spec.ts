import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatures } from './new-features';

describe('NewFeatures', () => {
  let component: NewFeatures;
  let fixture: ComponentFixture<NewFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
