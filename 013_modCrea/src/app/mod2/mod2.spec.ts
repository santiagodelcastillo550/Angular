import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2 } from './mod2';

describe('Mod2', () => {
  let component: Mod2;
  let fixture: ComponentFixture<Mod2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
