import { Component, inject, OnDestroy } from '@angular/core';
import { from, Observable, of, Subject, Subscription, take } from 'rxjs';
import { CommonService } from '../../services/common-service';
import { Alert } from '../../resuableComponents/alert/alert';
import { MyButton } from '../../resuableComponents/my-button/my-button';

@Component({
  selector: 'app-rxjs-basic-ex',
  imports: [Alert, MyButton],
  templateUrl: './rxjs-basic-ex.html',
  styleUrl: './rxjs-basic-ex.css',
})
export class RxjsBasicEx implements OnDestroy {
  // uni Cast
  // multi cast

  $myObservable = new Observable<string>((stream) => {
    stream.error('Success');
  });

  inputNo: number = 12;

  isEven$ = new Observable<boolean>((stream) => {
    if (this.inputNo % 2 == 0) {
      stream.next(true);
    } else {
      stream.error(false);
    }
  });

  rollNoList$ = of<number[]>([11, 12, 13, 14, 15, 16, 17]);
  studentObject$ = of({ name: 'chetan', city: 'Pune', state: 'MH' });
  currentDate$ = of<Date>(new Date());

  cityList$ = from<string[]>(['Pune', 'Mumbai', 'Jaipur', 'Udaypur']);

  // employeeObj$ = from({empid:122,empName:'sadasd'});
  // rollNo$ = from(23)

  myInputNo$: Subject<number> = new Subject<number>();

  commonService = inject(CommonService);

  isAlertVisiable =  false;

  mySubscription : Subscription  = new Subscription();

  //rxjs Reactive extension for js
  constructor() {
    this.checkEvenOdd();
    this.$myObservable.subscribe({
      next: (res: string) => {},
      error: (err: string) => {},
    });
  }

  ngOnInit() {

  //  this.mySubscription =  this.commonService.roleSubject$.subscribe({
  //     next:(Res:string)=>{
  //       debugger;
  //     }
  //   })

    this.commonService.roleSubject$.pipe(
      take(2)
    ).subscribe({
      next:(Res:string)=>{
        debugger;
      }
    })
    debugger;
    this.commonService.myInputNo$.subscribe({
      next: (res: number) => {
        debugger;
      },
    });

    this.commonService.myInputBehSub$.subscribe({
      next: (res: number) => {
        debugger;
      },
    });

     this.commonService.myInputReplaySub.subscribe({
      next: (res: number) => {
        debugger;
      },
    });
    this.myInputNo$.subscribe({
      next: (num: number) => {
        debugger;
      },
    });

    

    this.rollNoList$.subscribe({
      next: (res: number[]) => {
        //debugger;
      },
    });
    // this.studentObject$.subscribe({
    //   next:(res:any)=>{
    //     debugger;
    //   }
    // })
    // this.currentDate$.subscribe({
    //   next:(date:Date)=>{
    //     debugger;
    //   }
    // })
    this.cityList$.subscribe({
      next: (res: any) => {
        //debugger;
      },
    });
  }

  setNumber(num: number) {
    debugger;
    this.myInputNo$.next(num);
    this.commonService.myInputNo$.next(num);
  }

  checkEvenOdd() {
    this.isEven$.subscribe({
      next: (res: boolean) => {},
      error: (err: boolean) => {},
    });
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
