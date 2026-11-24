import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IHeader, MyTable } from '../../resuableComponents/my-table/my-table';

@Component({
  selector: 'app-get-api-ex',
  imports: [FormsModule, MyTable],
  templateUrl: './get-api-ex.html',
  styleUrl: './get-api-ex.css',
})
export class GetApiEx {

  jsonUserList: any [] = [];
  jsonUserListSig:WritableSignal<any[]> = signal([]);

  busUserList :WritableSignal<any[]>  = signal([]);
  busLocationList: WritableSignal<any[]> = signal([])
  id: number = 0;

  singleBuSchedleData: WritableSignal<any> = signal({})

  http = inject(HttpClient);
//'userName','emailId','fullName','projectName'
  colList: IHeader[] = [
      { fieldName: 'userName', headerText: 'User  Name' },
      { fieldName: 'emailId', headerText: 'Email' },
      { fieldName: 'fullName', headerText: 'Full Name' },
      { fieldName: 'projectName', headerText: 'Project' },
    ];
  


  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(res:any)=>{
        debugger;
        this.jsonUserList = res;
      },
      error:(error:any)=>{
        debugger;
      }
    })
  }

  getAllJsonUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(res:any)=>{
        debugger;
        this.jsonUserListSig.set(res)
      },
      error:(error:any)=>{
        debugger;
      }
    })
  }

  getBusUsers() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe({
      next:(result:any)=>{
        this.busUserList.set(result.data)
      }
    })
  }

  getCityList() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusLocations").subscribe({
      next:(res:any)=>{
        this.busLocationList.set(res)
      }
    })
  }

  getIdRecord() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusScheduleById?id=" + this.id).subscribe({
      next:(res:any)=>{
        this.singleBuSchedleData.set(res);
      }
    })
  }


}
