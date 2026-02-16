import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipe } from './date-pipe';

describe('DatePipe', () => {
  let component: DatePipe;
  let fixture: ComponentFixture<DatePipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
