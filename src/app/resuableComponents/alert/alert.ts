import { NgClass } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { CommonService } from '../../services/common-service';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {

  //@Input() alertType : string = '';

  @Input() alertMessage: string = '';

  alertType = input("");

  version  ="2.11";

  commonService =  inject(CommonService);
  constructor() {
    this.commonService.myInputNo$.subscribe({
      next:(res:number)=>{
        debugger;
      }
    })
     this.commonService.myInputBehSub$.subscribe({
      next: (res: number) => {
        debugger;
      },
    });
     this.commonService.myInputReplaySub.subscribe({
      next: (res: number) => {
        debugger;
      },
    });
  }

  // @Input () alertData: any = {};

  getAlertClassName() {
    if(this.alertType() == 'Success') {
      return 'alert-success'
    } else if(this.alertType() == 'Warning') {
      return 'alert-warning'
    } else {
      return 'alert-danger'
    }
  }
 
}
