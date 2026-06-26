import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiEx } from './get-api-ex';

describe('GetApiEx', () => {
  let component: GetApiEx;
  let fixture: ComponentFixture<GetApiEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiEx],
    }).compileComponents();

    fixture = TestBed.createComponent(GetApiEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
