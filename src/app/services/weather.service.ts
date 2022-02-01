import { Injectable } from '@angular/core';
import {FormBase} from '../models/form-base';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getFormInputs() {
    const questions: FormBase<string>[] = [
      new FormBase({
        key: 'Location',
        label: 'Location',
        type: 'select',
        order: 1,
        required: true,
        options: [{key: 'Atlanta', value: 'Atlanta'}, {key: 'Houston', value: 'Houston'}, {key: 'Chicago', value: 'Chicago'}]
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
