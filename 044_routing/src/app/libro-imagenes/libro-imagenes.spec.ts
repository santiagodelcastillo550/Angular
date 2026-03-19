import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroImagenes } from './libro-imagenes';

describe('LibroImagenes', () => {
  let component: LibroImagenes;
  let fixture: ComponentFixture<LibroImagenes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroImagenes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroImagenes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
