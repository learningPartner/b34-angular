import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array-ex',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-array-ex.html',
  styleUrl: './form-array-ex.css',
})
export class FormArrayEx implements OnInit {
  customerForm!: FormGroup;

  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  customerList = signal<any>([]);

  isFormDone = signal<boolean>(false);

  constructor() {
    this.crrateForm();
    this.customerAddress.push(this.addNewAddrees());
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  crrateForm() {
    this.customerForm = this.formBuilder.group({
      custId: [0],
      name: [''],
      email: [''],
      mobile: [''],
      address: this.formBuilder.array([]),
    });
  }

  addCustomerForm() {
    this.customerAddress.push(this.addNewAddrees());
  }

  get customerAddress(): FormArray {
    return this.customerForm.get('address') as FormArray;
  }

  addNewAddrees() {
    return this.formBuilder.group({
      addressId: [0],
      custId: [0],
      title: [''],
      city: [''],
      pincode: [''],
      address: [''],
    });
  }

  addExistingAddrees(data: any) {
    return this.formBuilder.group({
      addressId: [data.addressId],
      custId: [data.custId],
      title: [data.title],
      city: [data.city],
      pincode: [data.pincode],
      address: [data.address],
    });
  }

  removeAddress(index: number) {
    this.customerAddress.removeAt(index);
  }

  saveCustomer() {
    const formValue = this.customerForm.value;
    debugger;
    this.http.post('https://localhost:44363/api/Customer/CreateCustomer', formValue).subscribe({
      next: (res: any) => {
        alert('Customer Saved');
        this.getCustomers();
      },
    });
  }

  updateCustomer() {
    const formValue = this.customerForm.value;
    debugger;
    this.http.put('https://localhost:44363/api/Customer/UpdateCustomer', formValue).subscribe({
      next: (res: any) => {
        alert('Customer U[pdated');
        this.getCustomers();
      },
    });
  }

  getCustomers() {
    debugger;
    this.http.get('https://localhost:44363/api/Customer/GetCustomers').subscribe({
      next: (res: any) => {
        this.customerList.set(res);
      },
    });
  }

  onEdit(id: number) {
    this.isFormDone.set(false);
    this.http.get('https://localhost:44363/api/Customer/getCustomerById?id=' + id).subscribe({
      next: (res: any) => {
        this.customerForm.reset();

        this.customerForm.patchValue({
          custId: res.custId,
          name: res.name,
          email: res.email,
          mobile: res.mobile,
        });
        this.customerAddress.clear();
        res.address.forEach((element: any) => {
          this.customerAddress.push(this.addExistingAddrees(element));
        });
        this.customerForm.updateValueAndValidity();
        this.isFormDone.set(true);
      },
    });
  }
}

// {
//   "custId": 0,
//   "name": "string",
//   "email": "string",
//   "mobile": "string",
//   "address": [
//     {
//       "addressId": 0,
//       "custId": 0,
//       "title": "string",
//       "city": "string",
//       "pincode": "string",
//       "address": "string"
//     }
//   ]
// }
