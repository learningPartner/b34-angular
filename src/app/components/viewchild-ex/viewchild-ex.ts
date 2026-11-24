import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { Alert } from '../../resuableComponents/alert/alert';

@Component({
  selector: 'app-viewchild-ex',
  imports: [Alert],
  templateUrl: './viewchild-ex.html',
  styleUrl: './viewchild-ex.css',
})
export class ViewchildEx implements OnInit, AfterViewInit {

 // @ViewChild('tempRollNo') rollNoEle!: ElementRef;

  rollNoEle = viewChild.required<ElementRef<HTMLInputElement>>("tempRollNo")

  //@ViewChild('myDiv') div11Ele!: ElementRef;

  div11Ele = viewChild.required<ElementRef<HTMLInputElement>>('myDiv');

  @ViewChild(Alert) myAlertCompInstance!: Alert;

  constructor() {
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    debugger;
    if(this.rollNoEle() != undefined) {
       this.rollNoEle().nativeElement.value = "sadasd";
    }
   
  }


  getRollNo() {
    //document.getElementById('textNUm').value
    const value =  this.rollNoEle().nativeElement.value;
    alert("text value "+ value)
  }

  setRollNo() {
    this.rollNoEle().nativeElement.value = "7890";
  }

  addCss() {
   // this.div11Ele.nativeElement.style.width = '200px';
   // this.div11Ele.nativeElement.style.height = '200px';
   // this.div11Ele.nativeElement.style.backgroundColor = 'red';
  
    const data =  this.myAlertCompInstance.version;
    debugger;
  }

}
