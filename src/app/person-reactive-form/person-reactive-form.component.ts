import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NumberRangeGroup} from "./NumberRangeGroup";
import {NumberRange} from "../NumberRange";



@Component({
  selector: 'app-person-reactive-form',
  templateUrl: './person-reactive-form.component.html',
  styleUrls: ['./person-reactive-form.component.css']
})
export class PersonReactiveFormComponent {
  myNumberRangeGroup = new NumberRangeGroup();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    numberRangeFormGroup: this.myNumberRangeGroup
  });

  constructor() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateNumberRange() {
    this.myNumberRangeGroup.update(new NumberRange(12, 33));
  }
}
