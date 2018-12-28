import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratoryComponent } from './respiratory.component';

describe('RespiratoryComponent', () => {
  let component: RespiratoryComponent;
  let fixture: ComponentFixture<RespiratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
