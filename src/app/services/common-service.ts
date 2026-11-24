import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, map, of, ReplaySubject, retry, Subject, tap } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  myInputNo$ : Subject<number> = new Subject<number>();

  myInputBehSub$: BehaviorSubject<number> =  new BehaviorSubject<number>(223);

  myInputReplaySub: ReplaySubject<number> = new ReplaySubject<number>(3);

  roleSubject$ : Subject<string> = new Subject<string>();

  rollNoList$ =  of([1,2,3,4,5,6,7,8,9,11,12,13,14,15]);

  numberList$ = of([1,2,3,4,5,6,7,8,9,10]);

  rollNo2List$ = from([11,22,33,44,55,66,77,88]);

  http = inject(HttpClient);

  wholeUserData: any;

  timer$ = interval(2000);

  getUserById(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id).pipe(
      retry(2),
      tap((res:any)=>{ 
        this.wholeUserData =  res;
      }),
      map((response:any) => response.address), 
    )
  }



}
