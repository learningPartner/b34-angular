import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    userName: '',
    password: ''
  };
  router =  inject(Router); //16

  constructor(private Router2: Router) {

  }

  onLogin() {
    debugger;
    if(this.loginObj.userName == 'admin@gmail.com' && this.loginObj.password == '112233') {
      alert("User si Valid")
      this.router.navigateByUrl('vendor')
      sessionStorage.setItem('loggedUserData','admin@gmail.com')
    } else {
      alert("Wromng Credentials")
    }
  }

}
