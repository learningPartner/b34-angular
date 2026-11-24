import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common-service';
import { concatMap, debounce, debounceTime, distinctUntilChanged, exhaustMap, filter, from, map, mergeMap, Subject, switchMap, take, takeUntil } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-basoc-transform',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-basoc-transform.html',
  styleUrl: './rxjs-basoc-transform.css',
})
export class RxjsBasocTransform {
  commonSrv = inject(CommonService);

  http = inject(HttpClient);

  searchFrom: FormGroup =  new FormGroup({
    serachText: new FormControl("")
  });

  stopTimeSub: Subject<void> = new Subject<void>;
  
  userIdList$ = from([2,3,4,5]);

  onUserIdGet$: Subject<number> = new Subject<number>();

  constructor() {
    this.getUserById();
    this.getUsersDataByIds()
    this.commonSrv.timer$.pipe(
      takeUntil(this.stopTimeSub)
    ).subscribe({
      next:(timee: number) =>{
        console.log("Timer "+ timee)
      }
    })
    this.commonSrv.myInputNo$.pipe(
      take(5)
    ).subscribe((res:number)=>{ 
    })
    this.commonSrv.rollNo2List$.pipe(
      take(5)
    ).subscribe((res:number)=>{ 
    })
    // this.commonSrv.rollNoList$.subscribe({
    //   next: (res: any) => {
    //     debugger;
    //   },
    // });
    this.commonSrv.rollNoList$.pipe(
      map((numbers:number[])=>{
      
        return numbers.map(num=> num *2 )
      })
    ).subscribe({
      next:(res:any)=>{ 
      }
    });

    this.commonSrv.numberList$.pipe(
      map((res:number[]) => res.filter((num:number) => num %2==0))
    ).subscribe({
      next:(res:any)=>{
        
      }
    });
   // this.onSearch();
    //this.getUserById();
  }

  getUsersDataByIds() {
    this.userIdList$.pipe(
      concatMap((id: number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+id))
    ).subscribe({
      next:(res:any) =>{
        console.log("res " + res)
      }
    })
  }

  getUserOnClick(id: number) {
    this.onUserIdGet$.next(id);
  }

  getUserById() {
    this.onUserIdGet$.pipe(
      exhaustMap((id: number)=> this.commonSrv.getUserById(id))
    ).subscribe({
      next:(res:any)=>{ 
        console.log(res);
      }
    })
  }

  stopTimer() {
    this.stopTimeSub.next();
  }

  onSearch() {
    // this.searchFrom.controls['serachText'].valueChanges.pipe(
    //   filter((searhText: string)=> searhText.length > 3)
    // ).subscribe({
    //   next:(res:string) =>{ 
    //   }
    // })

    // this.searchFrom.controls['serachText'].valueChanges.subscribe({
    //   next:(searchText:string) =>{
    //     debugger;
    //     this.http.get("https://dummyjson.com/products/search?q="+searchText).subscribe({
    //       next:(res:any)=>{
    //         debugger;
    //         console.log(res.products)
    //       }
    //     })
    //   }
    // })

    // this.searchFrom.controls['serachText'].valueChanges.pipe(
    //   filter((serachtext: string)=> serachtext.length> 3),
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap((searchVal) => this.http.get("https://dummyjson.com/products/search?q="+searchVal))
    // ).subscribe((res:any)=>{
    //    console.log(res.products)
    // })

    // this.searchFrom.controls['serachText'].valueChanges.pipe(
    //   filter((serachtext: string)=> serachtext.length> 3),
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   mergeMap((searchVal) => this.http.get("https://dummyjson.com/products/search?q="+searchVal))
    // ).subscribe((res:any)=>{
    //    console.log(res.products)
    // })

     this.searchFrom.controls['serachText'].valueChanges.pipe(
      filter((serachtext: string)=> serachtext.length> 3),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((searchVal) => this.http.get("https://dummyjson.com/products/search?q="+searchVal))
    ).subscribe((res:any)=>{
       console.log(res.products)
    })

  }
}
