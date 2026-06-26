import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import {User} from './components/user/user'
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [DataBinding,RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b-34');
}
