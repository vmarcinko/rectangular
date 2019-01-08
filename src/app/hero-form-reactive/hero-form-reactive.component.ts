import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {catchError, delay, map} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
  hero = {name: 'Stefan', alterEgo: 'Stevke', power: null};
  heroForm: FormGroup;

  private identityRevealedValidator: ValidatorFn = (formGroupControl: FormGroup): ValidationErrors | null => {
    const name = formGroupControl.get('name');
    const alterEgo = formGroupControl.get('alterEgo');

    return name && alterEgo && name.value === alterEgo.value ? {'identityRevealed': true} : null;
  };

  private uniqueAlterEgoValidator: AsyncValidatorFn = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    // simulating slow server validation
    let value = control.value.alterEgo as string;
    const taken = value != null && value.includes("666");
    const fakeResponseObservable = of(taken);

      return fakeResponseObservable.pipe(
        delay(3000),
        map(isTaken => (isTaken ? {uniqueAlterEgo: true} : null)),
        catchError(() => null)
      );
    };


  constructor() {
  }

  ngOnInit() {

    this.heroForm = new FormGroup({
        'name': new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          this.forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        ]),
        'alterEgo': new FormControl(this.hero.alterEgo),
        // 'power': new FormControl(this.hero.power, Validators.required)
      }, this.identityRevealedValidator, this.uniqueAlterEgoValidator);
  }

  get nameControl() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

  onSubmit() {
    console.warn(this.heroForm.value);
  }

  private forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
}
