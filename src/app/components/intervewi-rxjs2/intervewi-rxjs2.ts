import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, from, mergeMap, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-intervewi-rxjs2',
  imports: [ReactiveFormsModule],
  templateUrl: './intervewi-rxjs2.html',
  styleUrl: './intervewi-rxjs2.css',
})
export class IntervewiRxjs2 {

  http = inject(HttpClient);

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

    //  this.userIdList.pipe(
    //   concatMap((id: number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+id))
    // ).subscribe({
    //   next:(res:any)=>{
    //     console.log(res); 
    //   }
    // })

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
