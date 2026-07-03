import { Component, signal } from '@angular/core';
 
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-tem-ng-container',
  imports: [NgFor, NgIf],
  templateUrl: './ng-tem-ng-container.html',
  styleUrl: './ng-tem-ng-container.css',
})
export class NgTemNgContainer {

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

  empList  = [
    {name:'Adi', status: false},
    {name:'Chetan', status: false},
    {name:'Rahul', status: true},
    {name:'Anklit', status: false},
    {name:'Onam', status: true},
  ]

  isLoaderActive = signal(true);

  constructor() {
    setTimeout(() => {
      this.isLoaderActive.set(false);
    }, 3000);
  }
}
