import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Alert } from '../../resuableComponents/alert/alert';
import { Tabs } from "../../resuableComponents/tabs/tabs";
import { MyButton } from '../../resuableComponents/my-button/my-button';
import { IHeader, MyTable } from '../../resuableComponents/my-table/my-table';

import { AgGridAngular } from 'ag-grid-angular'; 
import { CellClickedEvent, ClientSideRowModelModule, ModuleRegistry, PaginationModule, TextFilterModule, type ColDef } from 'ag-grid-community'; 


ModuleRegistry.registerModules([PaginationModule, ClientSideRowModelModule,TextFilterModule]);


@Component({
  selector: 'app-vendor',
  imports: [FormsModule, JsonPipe, Alert, Tabs, MyButton, NgTemplateOutlet, MyTable, AgGridAngular],
  templateUrl: './vendor.html',
  styleUrl: './vendor.css',
})
export class Vendor implements OnInit {
  newVendorObj: any = {
    vendorId: 0,
    vendorName: '',
    contactNo: '',
    emailId: '',
  };
  vendorList: WritableSignal<any[]> = signal([]);
  isUpdate = signal(false);
  selectedTabName: string = 'Vendor List';

  // colList: string[] = ['vendorName','contactNo','emailId']

  // colList: IHeader[] = [
  //   { fieldName: 'vendorName', headerText: 'Vendor Name' },
  //   { fieldName: 'contactNo', headerText: 'Mobile' },
  //   { fieldName: 'emailId', headerText: 'Email' },
  // ];

  defaultColDef: ColDef = {

    flex: 1,

    minWidth: 100,

  };

  columnList: ColDef[] = [
        { field: "vendorName", headerName:"Travel Company Name",sortable:true,  filter: true },
        { field: "contactNo", headerName:"Mobile No" ,
          cellRenderer:(data:any)=> "+91 "+ data.data.contactNo
         },
        { field: "emailId", headerName:"Email Id" },
        { headerName:"Actions",
          cellRenderer: () => `<a class='btn btn-success btn-edit'> Edit</a> <a class='btn btn-danger btn-delete'> Delete</a>`,
          onCellClicked:(event: CellClickedEvent)=>{
            if((event.event?.target as HTMLElement).closest(".btn-edit")) {
              debugger;
            }
             if((event.event?.target as HTMLElement).closest(".btn-delete")) {
              debugger;
            }
          }
        }
    ];

  constructor(private http: HttpClient) {
    debugger;
  }

  onConatctChnage() {}

  onSaveUserclicked() {
    debugger;
    alert('Child btn cliec Evebed receibved');
  }
  ngOnInit(): void {
    this.getAllVendors();
  }

  onTabChanges(tab: string) {
    debugger;
    this.selectedTabName = tab;
  }

  onEdit(data: any) {
    debugger;
    this.newVendorObj = data;
    this.isUpdate.set(true);
  }

  onReset() {
    this.isUpdate.set(false);
    this.newVendorObj = {
      vendorId: 0,
      vendorName: '',
      contactNo: '',
      emailId: '',
    };
  }

  getAllVendors() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (res: any) => {
        const cortedRecord = res.sort((a: any, b: any) => a.vendorName.localeCompare(b.vendorName));
        this.vendorList.set(cortedRecord);
      },
    });
  }

  onDelete(data: any) {
    debugger;
    this.http
      .delete('https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=' + data.vendorId)
      .subscribe({
        next: (res: any) => {
          alert('Vendor Deleted');
          this.getAllVendors();
        },
      });
  }

  onSaveVendor(form: NgForm) {
    debugger;
    if (!form.invalid) {
      this.http
        .post('https://api.freeprojectapi.com/api/BusBooking/PostBusVendor', this.newVendorObj)
        .subscribe({
          next: (result: any) => {
            debugger;
            alert('Vendor Created Success');
            this.getAllVendors();
          },
          error: (err: any) => {
            debugger;
            alert('API Error');
          },
        });
    }
  }

  onUpdateVendor() {
    this.http
      .put(
        'https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' +
          this.newVendorObj.vendorId,
        this.newVendorObj,
      )
      .subscribe({
        next: (result: any) => {
          debugger;
          alert('Vendor Updated Success');
          this.getAllVendors();
        },
        error: (err: any) => {
          debugger;
          alert('API Error');
        },
      });
  }
}
