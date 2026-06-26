import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attr-directive',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './attr-directive.html',
  styleUrl: './attr-directive.css',
})
export class AttrDirective {
  div1Class = '';
  isActive = false;
  num1 = 0;
  num2 = 0;
  textColor = '';
  textFontColor = '';
  playerList = [
    {
      isActive: false,
      grade: 'A',
      name: 'Sachin Tendulkar',
      city: 'Mumbai',
      contactNo: '9988998899',
    },
    { isActive: true, grade: 'A', name: 'Virat Kohli', city: 'Delhi', contactNo: '1122334455' },
    { isActive: false, grade: 'B', name: 'Rahul Dravid', city: 'Bhopal', contactNo: '2233442233' },
    {
      isActive: true,
      grade: 'A',
      name: 'Virendra Sehwag ',
      city: 'Delhi',
      contactNo: '55665566779',
    },
    { isActive: false, grade: 'B', name: 'Sumn', city: 'Mumbai', contactNo: '9988998899' },
    { isActive: false, grade: 'A', name: 'Punam ', city: 'Delhi', contactNo: '1122334455' },
    { isActive: false, grade: 'A', name: 'Prakash', city: 'Bhopal', contactNo: '2233442233' },
    { isActive: false, grade: 'A', name: 'Anuj ', city: 'Delhi', contactNo: '55665566779' },
  ];

  studentObj = {
    name: 'sdsd',
    city: 'puen',
    'staten-name': '',
  };

  myCustomCss = {
    'background-color': 'green',
    color: 'black',
    'font-size': '33px',
  };

  addDiv1Class(className: string) {
    this.div1Class = className;
  }
}
