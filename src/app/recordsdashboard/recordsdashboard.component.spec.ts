import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsdashboardComponent } from './recordsdashboard.component';

describe('RecordsdashboardComponent', () => {
  let component: RecordsdashboardComponent;
  let fixture: ComponentFixture<RecordsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
