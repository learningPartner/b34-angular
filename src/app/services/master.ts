import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Master  {

  courseName: string = '';
  courseDuration: string = '12 Months';

  onRoleChange$ : Subject<string> = new Subject<string>;
  onRoleChnageBehvaior$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  navbarNumber$ : Subject<number> = new Subject<number>();

  navbarBehvaioutNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(123);

  navbarReplaySub: ReplaySubject<number> = new ReplaySubject<number>(3);




  getSumOfTwoNumbers(num1: number, num2: number) { 
    if(num1 >0 && num2> 0) {
       return num1 + num2
    } else {
      return -1;
    } 
  }

  checkElementExistOrNot(arrList:string[], searchText: string) {
     const isExit= arrList.find(m=> m.toLocaleLowerCase() == searchText.toLocaleLowerCase());
     if(isExit == undefined) {
      return false;
     } else {
      return true;
     }
  }

}
