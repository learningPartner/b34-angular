import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const loggedUser =  sessionStorage.getItem("loggedUserData");
  const router = inject(Router);

  if(loggedUser == null) {
    router.navigateByUrl('login');
    return false;
  } else {
    return true;
  }
  
};


//angular 15 => Service
//From 16 => Gaurd and Interceptors are Arrow Functions 