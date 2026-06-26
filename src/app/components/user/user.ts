import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit,AfterContentInit,AfterContentChecked,DoCheck,AfterViewInit,AfterViewChecked,OnDestroy {

  userName: string = "Rahul";

  courseName: string;

  constructor() {
    console.log('this is constructor');
    this.courseName = '';
    //variabel initializations
  }

  chnageUser() {
    this.userName = "Manav"
  }

  ngOnInit(): void {
     console.log("ng oninit")
     //api call
     //subscription
  }

  ngDoCheck(): void {
    console.log("ng ngDoCheck")
  }

  ngAfterContentInit(): void {
     console.log("ng ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
     console.log("ng ngAfterContentChecked")
  }


  ngAfterViewInit(): void {
     console.log("ng ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
     console.log("ng ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    debugger;
     console.log("ng ngOnDestroy")
  }
  
}
