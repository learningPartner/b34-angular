import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { from, interval, Observable, of, Subject, Subscription, take, takeUntil } from 'rxjs';
import { Master } from '../../services/master';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-interview-rxjs',
  imports: [],
  templateUrl: './interview-rxjs.html',
  styleUrl: './interview-rxjs.css',
})
export class InterviewRxjs implements OnDestroy {

  number = 14;
  http = inject(HttpClient);

  masterSrv = inject(Master);
  //uni cast  => emeit data only Once we cant chnage it
  cityList$ = of(["Pune", "Maumbai", "Nagpur", "Tahne"]);
  studentObj$ = of({ name: 'Rahul', city: 'Pune', studId: 132, mobile: '2233442233' });
  rollNoList = from([11, 12, 13, 14, 15, 16]);
  timer$ = interval(1000);

  //,multi cast
  courseName$: Subject<string> = new Subject<string>;

  subscriptionList: Subscription[] = [];
  destroyUntill: Subject<void> = new Subject<void>;
  destroyRef = inject(DestroyRef);

  StopSubjectSubscription() {
   
  } 

  constructor() {
    this.masterSrv.navbarNumber$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((res:any)=>{
      debugger;
    })

    this.masterSrv.navbarNumber$.pipe(
      takeUntil(this.destroyUntill)
    ).subscribe((res:any)=>{
      debugger;
    })

   this.masterSrv.navbarBehvaioutNumber$.pipe(
    take(2)
   ).subscribe((reS:any)=>{
      debugger;
   })
   
    const sub3 = this.masterSrv.navbarReplaySub.subscribe({
      next: (numb: number) => {
        debugger
      }
    })
    this.subscriptionList.push(sub3)
    //  this.allSubScription()
    //this.setRxjs()
    //this.getUsers()
    this.listendToCourseName();
    // this.getAllPosts();
    const newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.number % 2 == 0) {
          resolve("Num Is Even")
        } else {
          reject("Num is Odd")
        }
      }, 2000)
    })

    newPromise.then((res) => {
    }).catch(error => {
    })
  }

  setRxjs() {
    debugger;
    const newOb$ = new Observable<string>((res) => {
      setTimeout(() => {
        if (this.number % 2 == 0) {
          res.next("Num Is even")
        } else {
          res.error("Num Is Odd")
        }
      }, 2000)
    })

    newOb$.subscribe({
      next: (res: string) => {
        debugger;
      },
      error: (err: string) => {
        debugger;
      }
    })
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users");

  }

  getAllPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe({
      next: (res: any) => {

      }
    })
  }

  allSubScription() {
    this.cityList$.subscribe({
      next: (res: string[]) => {
        debugger;
      }
    })
    this.studentObj$.subscribe({
      next: (res: any) => {
        debugger;
      }
    })

    this.rollNoList.subscribe({
      next: (rollNumber: number) => {
        debugger;
      }
    })

    this.timer$.subscribe({
      next: (time: number) => {
        debugger;
      }
    })
  }

  setCourseName(courseName: string) {

    this.courseName$.next(courseName);

  }

  listendToCourseName() {
    this.courseName$.subscribe({
      next: (course: string) => {
        debugger;
      }
    })
  }

  ngOnDestroy(): void {
     this.destroyUntill.next()
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    });
  }




}


