import { HttpClient } from '@angular/common/http';
import { Component, inject, resource, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-features',
  imports: [],
  templateUrl: './new-features.html',
  styleUrl: './new-features.css',
})
export class NewFeatures {

  userResource: ResourceRef<any[] | undefined>;

  constructor() {
    this.userResource = resource({
      loader: async (): Promise<any[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();
      },
    });
  }

  private http = inject(HttpClient);

  // rxResource manages the stream and exposes states as Signals
  todoResource = rxResource<any,any>({
    stream: () => this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  });
}
