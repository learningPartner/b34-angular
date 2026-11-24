import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, computed, WritableSignal, linkedSignal, untracked, effect } from '@angular/core';

@Component({
  selector: 'app-signal-basic-ex',
  imports: [],
  templateUrl: './signal-basic-ex.html',
  styleUrl: './signal-basic-ex.css',
})
export class SignalBasicEx {


  courseName: string = 'React Js';

  studentName : WritableSignal<string> = signal<string>("Chetan");

  studentCity =  signal<string>("Pune")

  currentDate = signal<Date>(new Date())

  cityList = signal<string[]>(['Solapur','Chandrapur','Jaipur','Thane'])

  


  couserDuaration  = signal<string>("2 Months");

  userList: any[]= [];

  userListSignal = signal<any[]>([]);

  http = inject(HttpClient);

  studentObj = signal<any>({
    name:'Sahcin',
    city:'Pune',
    mobile:'9900990088'
  })

  fName = signal("Chetan");
  mName =  signal("P");
  lName =  signal("Jogi");

  fullName = computed(()=> this.fName() + " " + this.mName() + " " + this.lName());

  fullShortName = linkedSignal(()=> this.fName() +" " + this.lName());

  fullNameNoTrack = linkedSignal(()=> this.fName() + " " + untracked(this.mName) + " " + untracked(this.lName))



  constructor() {

    effect(()=>{
      const firtName = this.fName();
      console.log("effect exe")
    })

    effect(()=>{
      const firstName =  this.fName();
      const lastNBame = this.lName();
      console.log("2nd Effect ")
    })
    


    console.log(this.studentName())
    this.getAllUsers();
    // setTimeout(() => { 
    //   this.courseName = "Angular"
    // }, 3000);

    // setTimeout(() => {
    //   this.couserDuaration.set("3.5 Months")
    // }, 7000); 

  }
  onChnageShort() {
    this.fullShortName.set("Ankit Khnagar")
  }

  onChnageFName(){
    this.fName.set("Rahul")
  }

  onChnageLName() {
    this.lName.set("Sharma")
  }

  chnageCourse() {
    this.courseName = "Java"
  }

  onChangeStudName(event:any) {
    const val =  event.target.value;
    this.studentObj.update(oldData => ({...oldData,name: val }))
  }

  addRajstanCitis() {
    this.cityList.set(['Jaipur','Udaypur'])
  }

  addCity(city: string) {
    // setTimeout(() => {
    //     this.cityList().push(city)
    // }, 2000);
  
    //this.cityList.update(oldList => [...oldList,city])
  }

  changeCity(cityName: string) {
    setTimeout(() => {
        this.studentCity.set(cityName)
    }, 2000);
    
  }

  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(res:any)=>{
       /// this.userList =  res;
       this.userListSignal.set(res)
      }
    })
  }

}
