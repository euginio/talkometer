import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica0301Component } from './practica0301.component';

describe('Practica0301Component', () => {
  let component: Practica0301Component;
  let fixture: ComponentFixture<Practica0301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practica0301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practica0301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
