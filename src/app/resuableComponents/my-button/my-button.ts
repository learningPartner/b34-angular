import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { CommonService } from '../../services/common-service';

@Component({
  selector: 'app-my-button',
  imports: [NgClass],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {
  // @Input() btnText: string = '';

  btnText = input('');

  //@Input() btnClassName: string = '';
  btnClassName = input('');

  // @Output() onBtnClicked =  new EventEmitter<void>();

  onBtnClicked = output<void>();

  commonService = inject(CommonService);
  constructor() {
    this.commonService.myInputNo$.subscribe({
      next: (res: number) => {
        debugger;
      },
    });
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

  btnClick() {
    debugger;
    this.onBtnClicked.emit();
  }
}
