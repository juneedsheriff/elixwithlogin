import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemainComponent } from './tablemain.component';

describe('TablemainComponent', () => {
  let component: TablemainComponent;
  let fixture: ComponentFixture<TablemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
