import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Master {

  courseName: string = '';
  courseDuration: string = '12 Months';

  onRoleChange$ : Subject<string> = new Subject<string>;
  
  onRoleChnageBehvaior$: BehaviorSubject<string> = new BehaviorSubject<string>("");

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
