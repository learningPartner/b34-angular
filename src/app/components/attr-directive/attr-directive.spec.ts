import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirective } from './attr-directive';

describe('AttrDirective', () => {
  let component: AttrDirective;
  let fixture: ComponentFixture<AttrDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(AttrDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
