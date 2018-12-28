import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulserateComponent } from './pulserate.component';

describe('PulserateComponent', () => {
  let component: PulserateComponent;
  let fixture: ComponentFixture<PulserateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulserateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulserateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
