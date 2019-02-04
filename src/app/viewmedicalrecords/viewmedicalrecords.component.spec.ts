import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedicalrecordsComponent } from './viewmedicalrecords.component';

describe('ViewmedicalrecordsComponent', () => {
  let component: ViewmedicalrecordsComponent;
  let fixture: ComponentFixture<ViewmedicalrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedicalrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedicalrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
