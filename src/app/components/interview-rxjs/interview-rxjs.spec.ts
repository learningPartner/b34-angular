import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRxjs } from './interview-rxjs';

describe('InterviewRxjs', () => {
  let component: InterviewRxjs;
  let fixture: ComponentFixture<InterviewRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewRxjs],
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
