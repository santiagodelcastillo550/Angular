import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTest } from './http-client-test';

describe('HttpClientTest', () => {
  let component: HttpClientTest;
  let fixture: ComponentFixture<HttpClientTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
