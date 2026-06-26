import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { form, FormField, minLength, pattern, required } from '@angular/forms/signals';
import { Master } from '../../services/master';
import { BatchService } from '../../services/batch-service';
import { ProgressBar } from '../../resuableComponents/progress-bar/progress-bar';
import { Alert } from '../../resuableComponents/alert/alert';
import { Tabs } from "../../resuableComponents/tabs/tabs";

@Component({
  selector: 'app-batch-master',
  imports: [FormField, ProgressBar, Alert, Tabs],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css' 
})
export class BatchMaster implements OnInit {

  alertType = "Success";
  alerClass = 'alert-success'
  message = "Welcome to Batch Master Page";

  tabListForProduct = ['Basic Product Info', 'Images', 'Diccounts', 'Offers']

  batchModel = signal({
    batchId: 0,
    batchName: '',
    createdDate: '',
  });
  courseName = '';

  batchForm = form(this.batchModel, (config) => {
    (required(config.batchName, { message: 'Name is Required' }),
      required(config.createdDate, { message: 'Date is Required' }),
      minLength(config.batchName, 3, { message: 'Min 3 Char Needed' }));
  });

   
  batchList: WritableSignal<any[]> = signal([]);
  master = inject(Master);
  batchService = inject(BatchService);

  ngOnInit(): void {
    this.courseName =  this.master.courseName;
    debugger;
    this.getBatchData();
    const resu1 = this.master.getSumOfTwoNumbers(33,33);
  }

  // getSum(num1: number, num2: number) {
  //   if(num1 >  0 && num2 > 0) {
  //     return num1 + num2;
  //   } else {
  //     return 0;
  //   } 
  // }

  onEdit(data: any) {
    data.createdDate = data.createdDate.split('T')[0];
    this.batchModel.set(data);
  }

  getBatchData() {
      debugger;
    this.batchService.getAllBatches().subscribe({
      next:(res:any)=>{
        debugger;
        this.batchList.set(res);
      }
    })
  }
  // getBatches() {
  //   this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches').subscribe({
  //     next: (responss: any) => {
  //       this.batchList.set(responss);
  //     },
  //     error: (error: any) => {},
  //   });
  // }

  // onSave() {
  //   if (!this.batchForm().valid()) {
  //     const formValue = this.batchForm().value();
  //     this.http
  //       .post('https://api.freeprojectapi.com/api/FeesTracking/batches', formValue)
  //       .subscribe({
  //         next: (responss: any) => {
  //           this.getBatchData();
  //         },
  //         error: (error: any) => {},
  //       });
  //   }
  // }

  onSave() {
    debugger;
    if (this.batchForm().valid()) {
      const formValue = this.batchForm().value();
       this.batchService.onSaveBatch(formValue).subscribe({
        next:(res:any)=>{
            debugger;
          this.getBatchData();
        }
       })
    }
  }
}
