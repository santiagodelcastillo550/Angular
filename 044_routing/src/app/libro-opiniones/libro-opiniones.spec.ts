import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroOpiniones } from './libro-opiniones';

describe('LibroOpiniones', () => {
  let component: LibroOpiniones;
  let fixture: ComponentFixture<LibroOpiniones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroOpiniones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroOpiniones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
