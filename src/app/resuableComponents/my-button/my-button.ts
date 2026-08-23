import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [NgClass],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {

 // @Input() btnText: string = '';

  btnText = input("");

  //@Input() btnClassName: string = '';
  btnClassName =  input("");

  //@Output() onBtnClicked =  new EventEmitter<void>();

  onBtnClicked = output<void>()

  btnClick() {
     debugger;
    this.onBtnClicked.emit()
  }
}
