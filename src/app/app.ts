import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import {User} from './components/user/user'
import { DataBinding } from './components/data-binding/data-binding';
import { Master } from './services/master';
import { CommonService } from './services/common-service';

@Component({
  selector: 'app-root',
  imports: [DataBinding,RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b-34');

  loggedUserEmail: string = '';
  router = inject(Router);

  commonService =  inject(CommonService);
   

  constructor() {
    const user = sessionStorage.getItem("loggedUserData");
    if(user != null) {
      this.loggedUserEmail =  user;
    } 
  }

  onNumberChange(event:any) {
    debugger;
    const num =  event.target.value;
    this.commonService.myInputNo$.next(num)
    this.commonService.myInputBehSub$.next(num)
    this.commonService.myInputReplaySub.next(num);

  }

  onRoleChnaged(event:any) {
    this.commonService.roleSubject$.next(event.target.value)
  }
  logOffUser() {
    sessionStorage.removeItem("loggedUserData");
    this.loggedUserEmail = '';
    this.router.navigate(['directives'])
  }
}
