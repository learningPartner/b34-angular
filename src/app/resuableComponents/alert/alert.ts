import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {

  @Input() alertType : string = '';

  @Input() alertMessage: string = '';

  version  ="2.11";

  // @Input () alertData: any = {};

  getAlertClassName() {
    if(this.alertType == 'Success') {
      return 'alert-success'
    } else if(this.alertType == 'Warning') {
      return 'alert-warning'
    } else {
      return 'alert-danger'
    }
  }
 
}
