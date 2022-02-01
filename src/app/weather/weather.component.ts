import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {WeatherService} from '../services/weather.service';
import {FormBase} from '../models/form-base';

/** Error when invalid control is dirty, touched, or submitted. */

interface IGenericFormFieldConfigUIBase {
  id: string;
  label: string;
}
@Component({
  selector: 'app-survey',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  form!: FormGroup;
  fields$: Observable<FormBase<any>[]>;
  constructor(service: WeatherService) {
    this.fields$ = service.getFormInputs();
  }

}
