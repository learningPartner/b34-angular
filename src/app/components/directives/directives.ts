import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProgressBar } from "../../resuableComponents/progress-bar/progress-bar";

@Component({
  selector: 'app-directives',
  imports: [NgIf, FormsModule, NgFor, RouterLink, ProgressBar],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  isDiv1Visiable = true;
  isOfferVail =  false;
  selectedIdentityProof: string = '';

  div2Visiable: string = "yes";

  textInput: string = '';
  isVovels = false;
  startDayChar = '';
  userSelctionView = 'ngFor';

  router = inject(Router); //16

  studentNameList = ['Chetan','Rahul','Naman','Ankit']

  playerList = [
    {progress:'20',isActive: false,name:'Sachin Tendulkar', city :'Mumbai', contactNo:'9988998899'},
    {progress:'30',isActive: true,name:'Virat Kohli', city :'Delhi', contactNo:'1122334455'},
    {progress:'20',isActive: false,name:'Rahul Dravid', city :'Bhopal', contactNo:'2233442233'},
    {progress:'50',isActive: true,name:'Virendra Sehwag ', city :'Delhi', contactNo:'55665566779'},
    {progress:'90',isActive: false,name:'Sachin Tendulkar', city :'Mumbai', contactNo:'9988998899'},
    {progress:'20',isActive: false,name:'Virat Kohli', city :'Delhi', contactNo:'1122334455'},
    {progress:'100',isActive: false,name:'Rahul Dravid', city :'Bhopal', contactNo:'2233442233'},
    {progress:'47',isActive: false,name:'Virendra Sehwag ', city :'Delhi', contactNo:'55665566779'}
  ]

  constructor(private router2: Router) {

  }

  navigateToUser() {
    this.router.navigateByUrl('userlist')
  }

  navigateToAdmin() {
    this.router2.navigate(['adminpage'])
  }


  changeView(tabName: string) {
    this.userSelctionView = tabName
  }

  

  onTextChange() {
    const vovelsList = ['a','e','i','o','u'];

    const isEixt =  this.textInput.split('').filter((m:string)=> vovelsList.includes(m))
    debugger;
    this.isVovels = isEixt.length == 0 ? false : true;
    // let isVoPresent = false;

    // vovelsList.forEach(element => { 
    //   debugger;
    //   if(this.textInput.includes(element)) {
    //     debugger;
    //     if(isVoPresent == false) {
    //       isVoPresent = true;
    //     } 
    //   } 
    // });
    // this.isVovels = isVoPresent
  }

  onShowDiv1() {
    this.isDiv1Visiable = true;
  }

  chnageDiv2Status() {
    this.div2Visiable = this.div2Visiable == 'yes'? 'no':'yes'
  }

  onHideDiv1() {
    this.isDiv1Visiable = false
  }

  toggelDiv1Visibility() {
    this.isDiv1Visiable = !this.isDiv1Visiable;
  }

  hideShowDiv1(isHide: boolean) {
    this.isDiv1Visiable =  isHide;
  }


}
