import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPipes } from './number-pipes';

describe('NumberPipes', () => {
  let component: NumberPipes;
  let fixture: ComponentFixture<NumberPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
