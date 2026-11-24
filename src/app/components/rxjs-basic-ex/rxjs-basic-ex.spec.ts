import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicEx } from './rxjs-basic-ex';

describe('RxjsBasicEx', () => {
  let component: RxjsBasicEx;
  let fixture: ComponentFixture<RxjsBasicEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasicEx],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsBasicEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
