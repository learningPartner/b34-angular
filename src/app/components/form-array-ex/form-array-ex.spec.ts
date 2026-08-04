import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayEx } from './form-array-ex';

describe('FormArrayEx', () => {
  let component: FormArrayEx;
  let fixture: ComponentFixture<FormArrayEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayEx],
    }).compileComponents();

    fixture = TestBed.createComponent(FormArrayEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
