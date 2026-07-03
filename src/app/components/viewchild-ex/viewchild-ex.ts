import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alert } from '../../resuableComponents/alert/alert';

@Component({
  selector: 'app-viewchild-ex',
  imports: [Alert],
  templateUrl: './viewchild-ex.html',
  styleUrl: './viewchild-ex.css',
})
export class ViewchildEx implements OnInit, AfterViewInit {

  @ViewChild('tempRollNo') rollNoEle!: ElementRef;
  @ViewChild('myDiv') div11Ele!: ElementRef;

  @ViewChild(Alert) myAlertCompInstance!: Alert;

  constructor() {
    
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    debugger;
    this.rollNoEle.nativeElement.value = 11223344;
  }


  getRollNo() {
    //document.getElementById('textNUm').value
    const value =  this.rollNoEle.nativeElement.value;
    alert("text value "+ value)
  }

  setRollNo() {
    this.rollNoEle.nativeElement.value = 7890;
  }

  addCss() {
    this.div11Ele.nativeElement.style.width = '200px';
    this.div11Ele.nativeElement.style.height = '200px';
    this.div11Ele.nativeElement.style.backgroundColor = 'red';
  
    const data =  this.myAlertCompInstance.version;
    debugger;
  }

}
