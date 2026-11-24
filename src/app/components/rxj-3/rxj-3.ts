import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxj-3',
  imports: [],
  templateUrl: './rxj-3.html',
  styleUrl: './rxj-3.css',
})
export class Rxj3 {
  http = inject(HttpClient);

  constructor() {
    this.getUser();
    const users = this.http.get('https://jsonplaceholder.typicode.com/users');
    const phosots = this.http.get('https://jsonplaceholder.typicode.com/photos');
    const posts = this.http.get('https://jsonplaceholder.typicode.com/phooooo');

    forkJoin([users, phosots, posts]).subscribe({
      next: (res: any) => {
        debugger;
      },
      error: (err: any) => {
        debugger;
      },
    });
  }

  getUser() {
    const users = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError((err) => of({ error: true, err })));

    const photos = this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(catchError((err) => of({ error: true, err })));

    const posts = this.http
      .get('https://jsonplaceholder.typicode.com/phooooo')
      .pipe(catchError((err) => of({ error: true, err })));

    forkJoin([users, photos, posts]).subscribe({
      next: (res: any[]) => {
        debugger;
        const [usersRes, photosRes, postsRes] = res;

        if (!usersRes?.error) {
          /* use usersRes */
        }
        if (!photosRes?.error) {
          /* use photosRes */
        }
        if (!postsRes?.error) {
          /* use postsRes */
        } else {
          console.error('Posts failed', postsRes.err);
        }
      },
    });
  }
}
