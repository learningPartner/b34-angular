import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {

  @Input() tabList: string[]=[];
  @Input() defaultTab: string = '';

  @Output() onTabChange = new EventEmitter<string>(); 
 


  onTabClick(tabName: string) {
     debugger;
     this.defaultTab  =tabName;
     setTimeout(() => {
          this.onTabChange.emit(tabName);
     }, 3000);
  
  }
}
