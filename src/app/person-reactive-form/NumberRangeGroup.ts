import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {NumberRange} from "../NumberRange";

export const orderValid: ValidatorFn = (form: FormGroup) => {
  const start = form.get('start');
  const end = form.get('end');
  if (start.valid && end.valid) {
    if (start > end) {
      return {invalidOrder: true};
    }
  }
  return null;
};

export class NumberRangeGroup extends FormGroup {

  constructor() {
    // try out the validators
    super(
      {
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required])
      },
      orderValid
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
