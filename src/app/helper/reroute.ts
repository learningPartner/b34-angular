import { inject } from '@angular/core';
import { RedirectFunction, Router } from '@angular/router';

export const determineDefaultRoute: RedirectFunction = (redirectData) => {
    debugger;
  const queryParams = redirectData.queryParams;
  const userRole = queryParams['role'];

  // Access Angular services inside your helper function
  const router = inject(Router);

  if (userRole === 'admin') {
    return '/data-binding';
  } else{
     return '/userlist';
  }

 

 
};