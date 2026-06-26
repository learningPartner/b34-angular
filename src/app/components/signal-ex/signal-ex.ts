import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {

  studentName : string = "Chetan";
  rollNo: number =  121;

  studentCity = signal("Pune");
  isStudentActive =  signal(true);
  studentDetails =  signal({name:'Tanmay',city:'Mumbai', mobile:'2233442233'})
  cityList = signal(['Mumbai','Nagpur','Pune'])

  courseName: WritableSignal<string> = signal("Angular");


  constructor() { 
    console.log(this.studentName);
    setTimeout(() => {
      debugger;
        this.studentName = "Sachin"
        this.studentCity.set("Solapur")
    }, 3000);
    //this.studentName = "Rohit"

    console.log(this.studentCity()); 
    
  }

  chnageName() {
    this.studentName = "Parag"
  }

  chnageCity() {
    this.studentCity.set("Mumbai")
  }






}
