import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRangeEditorComponent } from './number-range-editor.component';

describe('NumberRangeEditorComponent', () => {
  let component: NumberRangeEditorComponent;
  let fixture: ComponentFixture<NumberRangeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberRangeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberRangeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
