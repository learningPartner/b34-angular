import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, filter, forkJoin, from, map, mergeMap, Observable, of, skipUntil, Subject, switchMap, takeUntil, takeWhile, tap } from 'rxjs';
import { Master } from '../../services/master';

@Component({
  selector: 'app-intervewi-rxjs2',
  imports: [ReactiveFormsModule],
  templateUrl: './intervewi-rxjs2.html',
  styleUrl: './intervewi-rxjs2.css',
})
export class IntervewiRxjs2 implements OnInit {

  http = inject(HttpClient);
  masterSv = inject(Master)

  searchControl : FormControl = new FormControl("");
  userIdList = from([2,3,44,5,6]);
  
  constructor(){ 
    // this.searchControl.valueChanges.pipe(
    //   mergeMap((userid: string)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+userid))
    // ).subscribe({
    //   next:(Result: any)=>{
    //     debugger;
    //     console.log(Result);
    //   }
    // })

    // this.userIdList.pipe(
    //   mergeMap((id: number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+id))
    // ).subscribe({
    //   next:(res:any)=>{
    //     console.log(res); 
    //   },error:(err:any)=>{
    //     console.log(err)
    //   }
    // })

     this.userIdList.pipe(
      concatMap((id: number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+id))
    ).subscribe({
      next:(res:any)=>{
        console.log(res); 
      }
    })

    this.searchControl.valueChanges.pipe(
      exhaustMap((userid: string)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+userid))
    ).subscribe({
      next:(Result: any)=>{
        debugger;
        console.log(Result);
      }
    })

    




    // this.searchControl.valueChanges.subscribe({
    //   next:(user:string)=>{
    //     this.http.get("https://jsonplaceholder.typicode.com/users/"+user).subscribe({
    //       next:(result: any)=>{
    //         console.log(result);
    //       }
    //     })
    //   }
    // })
  }

  totalSum = 0;
  stopListner$: Subject<void> = new Subject<void>;

  ngOnInit(): void {
    this.masterSv.getSurveyData().subscribe({
      next:(res:any) =>{
        debugger;
      }
    })

    this.masterSv.numbersList$.pipe(
      filter((num:number)=>  num % 2 !=0), 
    ).subscribe((res:number)=>{
      debugger;
    })
     this.masterSv.numbersList$.pipe( 
      takeWhile((num:number)=>  num % 2 ==0)
    ).subscribe((res:number)=>{
      debugger;
    })

    this.masterSv.numbersList$.pipe(
      takeUntil(this.stopListner$)
    ).subscribe((num)=>{
      debugger;
      this.totalSum =  this.totalSum + num;
      if(this.totalSum >30) {
        this.stopListner$.next()
      }
    })
    this.masterSv.employeeList$.pipe(
       tap((item)=> {
        debugger;
      }),
      map((emp:any[]) => {
        debugger;
        return emp.map((item)=> ({id: item.empId, name: item.empName}))
      }),
     
    ).subscribe((res:any)=>{
      debugger;
    })

    this.masterSv.empObj$.pipe(
      map((empData:any) => empData.projects)
    ).subscribe((projects:any)=>{
      debugger;
    })

    this.masterSv.numbers$.pipe(
      map((numbers: number[])=>  numbers.map((num)=> num * 3))
    ).subscribe((newArray)=>{
      debugger;
    })
  }


  getJsonPlaceHolderData() {
    debugger;
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts43");

    forkJoin([users$,posts$]).subscribe({
      next:(res:any)=>{
        debugger;
      },
      error:(err:any)=>{
        debugger;
      }
    })
  }



}
