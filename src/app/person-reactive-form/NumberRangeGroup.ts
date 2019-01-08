import {FormControl, FormGroup} from "@angular/forms";
import {NumberRange} from "../NumberRange";

export class NumberRangeGroup extends FormGroup {

  constructor() {
    // should put some Validators here!!!
    super(
      {
        start: new FormControl(''),
        end: new FormControl('')
      }
    );
  }

  update(numberRange: NumberRange) {
    this.get('start').setValue(numberRange.start);
    this.get('end').setValue(numberRange.end);
  }

  getRange(): NumberRange {
    return new NumberRange(this.get('start').value, this.get('end').value)
  }
}
