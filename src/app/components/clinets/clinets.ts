import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Master } from '../../services/master';
import { ProgressBar } from '../../resuableComponents/progress-bar/progress-bar';
import { Alert } from "../../resuableComponents/alert/alert";

@Component({
  selector: 'app-clinets',
  imports: [ReactiveFormsModule, ProgressBar, Alert],
  templateUrl: './clinets.html',
  styleUrl: './clinets.css',
})

export class Clinets implements OnInit {

  isListViewVisiable = signal(false);

  clinetForm: FormGroup = new FormGroup({
    clientId: new FormControl(0),
    clientName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    businessName: new FormControl(''),
    contactPerson: new FormControl(''),
    contactNo: new FormControl(''),
    altContactNo: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
    ]),
    createdDate: new FormControl(new Date()),
    logo: new FormControl(''),
  });

  clientList: WritableSignal<any[]> = signal([]);

  http = inject(HttpClient);

  masterSrv =  inject(Master);

  //masterService : Master = new Master();
  
  // constructor(private master : Master) {

  // }
  cityList = ['pune','Nagpur','Mumbai']

  ngOnInit(): void {
    debugger;
    const isMumbaiPresent =  this.masterSrv.checkElementExistOrNot(this.cityList,'mumbai')
    const res1 =  this.masterSrv.getSumOfTwoNumbers(12, 23);
    const res2 =  this.masterSrv.getSumOfTwoNumbers(44,55);
    this.getAllClient();
  }

  // getSumOfTwoNum(num1: number, num2: number) {
  //   return num1 + num2;
  // }

  onSaveCourse() {
    debugger;
    this.masterSrv.courseName = "Angular 22 Course";
  }

  onEdit(item: any) {
    this.clinetForm.setValue(item);
    this.chnageView();
  }

  onResetForm() {
    debugger;
    this.clinetForm.reset();
  }

  chnageView() {
    this.isListViewVisiable.set(!this.isListViewVisiable());
  }

  getAllClient() {
    this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next: (res: any) => {
        this.clientList.set(res.data);
      },
    });
  }

  onSaveClient() {
    if (!this.clinetForm.invalid) {
      const formValue = this.clinetForm.value;
      debugger;
      this.http
        .post('https://api.freeprojectapi.com/api/SmartParking/AddClient', formValue)
        .subscribe({
          next: () => {
            alert('Client Saved Success');
          },
          error: (error: any) => {
            alert('API error');
          },
        });
    }
  }
}
