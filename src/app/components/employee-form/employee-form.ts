import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Constant } from '../../constant';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  empForm: FormGroup = new FormGroup({});

  fromConfigData: IFormConfig[] = Constant.employeeFormConfig as IFormConfig[];
  
  constructor(){
    this.initializeForm();
  }

  initializeForm() {
    debugger;

    this.fromConfigData.forEach(element => {

      const formControlObj =  new FormControl(element.value,element.validation);

      this.empForm.addControl(element.fieldName,formControlObj ) 
       
    });
    debugger;
  }

  onSaveEmp() {
    const formValud=  this.empForm.value;
    debugger;
  }





}

interface IFormConfig {
  fieldName: string;
  type: string;
  lable: string;
  placeholder: string;
  validation?: any[];
  tooltip?: string;
  options?: string[];
  value: any
}
