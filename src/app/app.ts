import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import {User} from './components/user/user'
import { DataBinding } from './components/data-binding/data-binding';

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

  constructor() {
    const user = sessionStorage.getItem("loggedUserData");
    if(user != null) {
      this.loggedUserEmail =  user;
    } 
  }

  logOffUser() {
    sessionStorage.removeItem("loggedUserData");
    this.loggedUserEmail = '';
    this.router.navigate(['directives'])
  }
}
