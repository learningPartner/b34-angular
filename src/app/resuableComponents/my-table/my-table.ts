import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [JsonPipe],
  templateUrl: './my-table.html',
  styleUrl: './my-table.css',
})
export class MyTable {

  // @Input() headerColList: string[] = [];

  @Input() headerColList: IHeader[] = []

  @Input() gridList: any[]  = [];

  @Input() showActionButton: boolean = false;

  @Output() onEditEmitter = new EventEmitter<any>();

   @Output() onDeleteEmitter = new EventEmitter<any>();


  onEdit(data: any) {
    debugger;
    this.onEditEmitter.emit(data)
  }

  onDelete(data: any) {
    debugger;
    const isDelete =  confirm("Are you sure want to Delete");
    if(isDelete) {
       this.onDeleteEmitter.emit(data)
    } 
  }
}


export interface IHeader {
  fieldName: string;
  headerText: string
}