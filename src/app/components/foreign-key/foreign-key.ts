import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foreign-key',
  imports: [FormsModule],
  templateUrl: './foreign-key.html',
  styleUrl: './foreign-key.css',
})
export class ForeignKey implements OnInit {
  newEnObj: any = {
    enquiryId: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    message: '',
    categoryId: 0,
    statusId: 0,
    enquiryType: '',
    isConverted: false,
    enquiryDate: new Date(),
    followUpDate: new Date(),
    feedback: '',
  };
  http = inject(HttpClient);
  categoryList : WritableSignal<any[]> = signal([]);
  statuList: WritableSignal<any[]> = signal([]);

  constructor() {
    
  }

  ngOnInit(): void {
    this.getCategory();
    this.getStatus();
  }

  getCategory() {
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories").subscribe({
      next:(res:any)=>{
        this.categoryList.set(res.data);
      }
    })
  }

  getStatus() {
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-statuses").subscribe({
      next:(res:any)=>{
        this.statuList.set(res.data);
      }
    })
  }

  onSaveEnq() {
    console.log(this.newEnObj);
    
  }
}
