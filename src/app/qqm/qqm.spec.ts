import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qqm } from './qqm';

describe('Qqm', () => {
  let component: Qqm;
  let fixture: ComponentFixture<Qqm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qqm],
    }).compileComponents();

    fixture = TestBed.createComponent(Qqm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
