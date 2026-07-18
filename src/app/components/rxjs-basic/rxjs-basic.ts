import { Component, inject, signal } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Master } from '../../services/master';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
})
export class RxjsBasic {

  isActive = false;

  obser1 = new Observable<number>((item)=>{
    if(this.isActive) {
      item.next(212);
    } else {
      item.error("Error in Obsvervables")
    } 
  });

  cityList$ = of(["Pune","Mumbai","Nagpur","Jaipur"]);

  sonyTvBrodcastting$ : Subject<string> = new Subject<string>;

  startMovbiewBroadcasting$ : Subject<string> = new Subject<string>;

  masterSerice = inject(Master);

  selectRoleName = signal("");

  selectRoleNameBehvairo = signal("");

  constructor() {
    this.masterSerice.onRoleChange$.subscribe((role:string)=>{
      debugger;
      this.selectRoleName.set(role)
    })

    this.masterSerice.onRoleChnageBehvaior$.subscribe({
      next:(role: string)=>{
        this.selectRoleNameBehvairo.set(role)
      }
    })
    // this.cityList$.subscribe({
    //   next:(res:string[])=>{
    //     debugger;
    //   }
    // })
    // this.obser1.subscribe({
    //   next:(res:number)=>{
    //     debugger;
    //   },
    //   error:(err:string)=>{
    //     debugger;
    //   }
    // })
    this.sonyTvBrodcastting$.subscribe((show: string)=>{
      debugger;
    })

    this.startMovbiewBroadcasting$.subscribe((MoviewNAme: string)=>{
       debugger;
    })
  }


  emitSonyShows(showName: string) {
    this.sonyTvBrodcastting$.next(showName)
  }

  emiStarMovies(moviewNAme: string) {
    this.startMovbiewBroadcasting$.next(moviewNAme)
  }



}
