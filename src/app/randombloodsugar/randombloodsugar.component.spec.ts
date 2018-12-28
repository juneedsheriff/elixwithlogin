import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombloodsugarComponent } from './randombloodsugar.component';

describe('RandombloodsugarComponent', () => {
  let component: RandombloodsugarComponent;
  let fixture: ComponentFixture<RandombloodsugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandombloodsugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandombloodsugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
