import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { form, FormField, minLength, pattern, required } from '@angular/forms/signals';
import { Master } from '../../services/master';
import { BatchService } from '../../services/batch-service';
import { ProgressBar } from '../../resuableComponents/progress-bar/progress-bar';
import { Alert } from '../../resuableComponents/alert/alert';
import { Tabs } from '../../resuableComponents/tabs/tabs';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-batch-master',
  imports: [FormField, ProgressBar, Alert, Tabs,AsyncPipe],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster implements OnInit, OnDestroy {
  alertType = 'Success';
  alerClass = 'alert-success';
  message = 'Welcome to Batch Master Page';

  tabListForProduct = ['Basic Product Info', 'Images', 'Diccounts', 'Offers'];

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

  subscritionList: Subscription[] = [];

  destorySubject: Subject<void> = new Subject<void>();

  destoryRef = inject(DestroyRef);

  batchData: Observable<any> = new Observable< any>;

  ngOnInit(): void {
    this.batchData =  this.batchService.getAllBatches();
    this.courseName = this.master.courseName;
    debugger;
    this.getBatchData();
    const resu1 = this.master.getSumOfTwoNumbers(33, 33);
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
    const sub = this.batchService.getAllBatches().subscribe({
      next: (res: any) => {
        debugger;
        this.batchList.set(res);
      },
    });
    this.subscritionList.push(sub);
  }

  getBatchData4() {
    debugger;
    this.batchService.getAllBatches().pipe(
      takeUntilDestroyed(this.destoryRef)
    ).subscribe({
      next: (res: any) => {
        debugger;
        this.batchList.set(res);
      },
    });
  }

  getBatchData2() {
    debugger;
    this.batchService
      .getAllBatches()
      .pipe(takeUntil(this.destorySubject))
      .subscribe({
        next: (res: any) => {
          debugger;
          this.batchList.set(res);
        },
      });
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
      this.subscritionList.push(
        this.batchService.onSaveBatch(formValue).subscribe({
          next: (res: any) => {
            debugger;
            this.getBatchData();
          },
        }),
      );
    }
  }
  onSave2() {
    debugger;
    if (this.batchForm().valid()) {
      const formValue = this.batchForm().value();

      this.batchService
        .onSaveBatch(formValue)
        .pipe(takeUntil(this.destorySubject))
        .subscribe({
          next: (res: any) => {
            debugger;
            this.getBatchData();
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.subscritionList.forEach((element) => {
      element.unsubscribe();
    });
    this.destorySubject.next();
  }
}
