import { Validators } from '@angular/forms';

export const Constant = {
  employeeFormConfig: [
    {
      fieldName: 'empName',
      type: 'text',
      lable: 'Enter Employee Name',
      placeholder: 'Employee Name',
      validation: [Validators.required, Validators.minLength(3)],
      tooltip: 'Employee Name Min 3 char',
      value: ''
    },
    {
      fieldName: 'empCity',
      type: 'dropdown',
      lable: 'Select City',
      placeholder: 'City',
      validation: [Validators.required],
      tooltip: 'City',
      options: ['Pune', 'Mumbai', 'Nagpur'],
      isOptionFromApi: true,
      value: ''
    },
    {
      fieldName: 'empAddress',
      type: 'textarea',
      lable: 'Enter Address',
      placeholder: 'Address',
      validation: [Validators.required, Validators.minLength(10)],
      tooltip: 'Address Min 10 char',
       value: ''
    },
    {
      fieldName: 'isFresher',
      type: 'checkbox',
      lable: 'Is Fresher',
      validation: [],
      tooltip: 'Fresher',
       value: false
    },
    {
      fieldName: 'gender',
      type: 'radio',
      lable: 'Gender',
      validation: [Validators.required],
      tooltip: 'Fresher',
      options: ['Male', 'Fe-Male'],
       value: ''
    },
  ],
};
