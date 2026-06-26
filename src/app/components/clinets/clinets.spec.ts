import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clinets } from './clinets';

describe('Clinets', () => {
  let component: Clinets;
  let fixture: ComponentFixture<Clinets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clinets],
    }).compileComponents();

    fixture = TestBed.createComponent(Clinets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
