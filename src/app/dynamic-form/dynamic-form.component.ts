import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {FormControlService} from '../services/form-control.service';
import {FormBase} from '../models/form-base';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FormBase<string>[] | null = [];
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();
  get isValid() { return this.form.valid }
  constructor(private scs: FormControlService) {}

  ngOnInit() {
    this.form = this.scs.toFormGroup(this.fields as FormBase<string>[]);
  }

  onSubmit() {
    // TODO: Call weather API through HTTP service and display the temperature
  }

  setFormControl(controlName: string, select: any): void {
    this.form.controls[controlName].setValue(select.value);
  }
}
