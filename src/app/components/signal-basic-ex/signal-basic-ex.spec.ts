import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasicEx } from './signal-basic-ex';

describe('SignalBasicEx', () => {
  let component: SignalBasicEx;
  let fixture: ComponentFixture<SignalBasicEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasicEx],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalBasicEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
