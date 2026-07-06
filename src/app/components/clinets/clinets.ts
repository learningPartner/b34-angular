import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    isContactPersonAvailable: new FormControl(false),
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

  formBuilder= inject(FormBuilder);
  batchForm!: FormGroup;
  clientList: WritableSignal<any[]> = signal([]);
  http = inject(HttpClient);
  masterSrv =  inject(Master);
  //masterService : Master = new Master();
  
  constructor() {
    this.batchForm = this.formBuilder.group({
      batchId:[0],
      batchName: ['',[Validators.required,Validators.minLength(3)]],
      createdDate: [new Date()]
    })

    this.clinetForm.events.subscribe((res:any)=>{
      debugger;
    })

    // this.clinetForm.valueChanges.subscribe((formVale: any)=>{
    //   debugger;
    // })
    this.clinetForm.controls['businessName'].valueChanges.subscribe(()=>{
      //this.clinetForm.get('contactPerson')?.setValue("0011001100");
      //this.clinetForm.controls['altContactNo']?.setValue('1122112211')
      //this.clinetForm.get('email')?.setValue('demo@gmail.com')
      const obj = {
        contactPerson: '1122112211',
        email: 'demo@gmailo.com',
        altContactNo: '9988998877' 
      };
      this.clinetForm.patchValue(obj)
      //this.clinetForm.setValue(obj)
    })

    this.clinetForm.controls['isContactPersonAvailable'].valueChanges.subscribe((res:boolean)=>{
      
      if(res == true) {
         //this.clinetForm.get('contactPerson')?.enable();
         console.log('Before ' +this.clinetForm.get('contactPerson')?.hasValidator(Validators.required));
        // this.clinetForm.get('contactPerson')?.addValidators([Validators.required,Validators.minLength(3)])
         this.clinetForm.get('contactPerson')?.addValidators(Validators.required)
         this.clinetForm.get('altContactNo')?.addValidators(Validators.required)
         this.clinetForm.get('contactNo')?.addValidators(Validators.required) 
         console.log('After ' +this.clinetForm.get('contactPerson')?.hasValidator(Validators.required));
        
      } else {
         this.clinetForm.get('contactPerson')?.removeValidators(Validators.required)
         this.clinetForm.get('altContactNo')?.removeValidators(Validators.required)
         this.clinetForm.get('contactNo')?.removeValidators(Validators.required)

        //this.clinetForm.controls['contactPerson']?.disable()
      } 

       this.clinetForm?.updateValueAndValidity();
    })

    this.clinetForm.get('altContactNo')?.valueChanges.subscribe((res:string)=>{
     
    })
  }
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
