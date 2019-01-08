import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";

@Component({
  selector: 'app-number-range-editor',
  templateUrl: './number-range-editor.component.html',
  styleUrls: ['./number-range-editor.component.css']
})
export class NumberRangeEditorComponent {
  constructor(public controlContainer: ControlContainer) {
  }
}
