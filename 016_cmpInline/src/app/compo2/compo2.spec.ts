import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo2 } from './compo2';

describe('Compo2', () => {
  let component: Compo2;
  let fixture: ComponentFixture<Compo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
