import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, map, of, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  courseName: string = '';
  courseDuration: string = '12 Months';

  onRoleChange$: Subject<string> = new Subject<string>();
  onRoleChnageBehvaior$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  navbarNumber$: Subject<number> = new Subject<number>();

  navbarBehvaioutNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(123);

  navbarReplaySub: ReplaySubject<number> = new ReplaySubject<number>(3);

  employeeList$ = of([
    { empId: 121, empName: 'Sachin', empCity: 'Pune', empContact: '112233445' },
    { empId: 123, empName: 'Rahul', empCity: 'Mumabi', empContact: '445544556' },
    { empId: 124, empName: 'Anand', empCity: 'Pune', empContact: '67576756' },
    { empId: 234, empName: 'Vedatnt', empCity: 'Pune', empContact: '23423423' },
    { empId: 432, empName: 'Punesh', empCity: 'Pune', empContact: '112233478978945' },
  ]);

  empObj$ = of({
    name: 'Rahul',
    city: 'Pune',
    state: 'MH',
    projects: [
      { projectName: 'Banking ERP', teckStack: 'Angular , Java', teamSize: '20' },
      { projectName: 'Ecommerce App ', teckStack: 'Angular , Dot Net', teamSize: '5' },
      { projectName: 'Webiste', teckStack: ' , wordpress', teamSize: '3' },
    ],
  });

  numbers$ = of([2,4,6,8,10,12,13,14,15,15]);

  numbersList$ = from([2,4,6,8,10,12,13,14,15,16]);
  http = inject(HttpClient)

  getSurveyData() {
    return this.http.get("https://testprojectapi.gerasim.in/api/Survey/surveys/4").pipe(
      map((result:any)=> result.questions)
    )
  }

  getSumOfTwoNumbers(num1: number, num2: number) {
    if (num1 > 0 && num2 > 0) {
      return num1 + num2;
    } else {
      return -1;
    }
  }

  checkElementExistOrNot(arrList: string[], searchText: string) {
    const isExit = arrList.find((m) => m.toLocaleLowerCase() == searchText.toLocaleLowerCase());
    if (isExit == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
