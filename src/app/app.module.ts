import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroFormReactiveComponent} from "./hero-form-reactive/hero-form-reactive.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PersonReactiveFormComponent } from './person-reactive-form/person-reactive-form.component';
import { NumberRangeEditorComponent } from './number-range-editor/number-range-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    PersonReactiveFormComponent,
    NumberRangeEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
