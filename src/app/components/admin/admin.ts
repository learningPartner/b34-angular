import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FullNamePipe } from '../../pipes/full-name-pipe';
import { FormatUploadFileNamePipe } from '../../pipes/format-upload-file-name-pipe';
import { HighLight } from '../../directives/high-light';

@Component({
  selector: 'app-admin',
  imports: [
    DecimalPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    FullNamePipe,
    FormatUploadFileNamePipe,
    HighLight
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  productPrice = 1200.2345;
  //ab.png => ab_1122334.png => ab .png
  myText = 'this is a Demo Content';
  

  courseName = 'Angular';
  courseDuration: string = '3 Months';
  rollNo: number = 123;
  isStudentActiev: boolean = false;
  currentDate: Date = new Date();

  productName: string = '123';

  employee: any = 'Chetan';

  student = {
    name: 'chetan',
    city: 'Nagpur',
    mobile: '9988776655',
    fName: 'chetan',
    mName: 'Prakash',
    lName: 'Jogi',
    logo: 'myImage_3344556.jpeg'
  };

  cityList: string[] = ['Pune', 'Nagpur', 'mumbai', 'Thane'];
  rollNoList = [11, 12, 13, 14];

  constructor() {
    debugger;
    this.employee = 123;
    this.employee = true;

    this.employee = {};
    this.employee = null;
    this.employee = undefined;
    this.employee = [11, 112, 122];
    this.employee = ['22', 'sad', '32432', 232, true, false, {}];
    //this.cityList = [11,112,13]

    //this.rollNoList = ['111','2222']

    console.log(this.currentDate);
    console.log(this.courseDuration);
    console.log('old ' + this.courseName);
    debugger;
    //this.courseName = "ReactJs";

    console.log('New ' + this.courseName);

    this.student.name = 'Naman';
  }
}
