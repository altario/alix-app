import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelValueListComponent } from './panel-value-list.component';

describe('PanelValueListComponent', () => {
  let component: PanelValueListComponent;
  let fixture: ComponentFixture<PanelValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelValueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
