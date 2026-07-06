import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { User } from './components/user/user';
import { Directives } from './components/directives/directives';
import { AttrDirective } from './components/attr-directive/attr-directive';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { SignalEx } from './components/signal-ex/signal-ex';
import { GetApiEx } from './components/get-api-ex/get-api-ex';
import { Vendor } from './components/vendor/vendor';
import { Clinets } from './components/clinets/clinets';
import { BatchMaster } from './components/batch-master/batch-master';
import { ForeignKey } from './components/foreign-key/foreign-key';
import { Login } from './components/login/login';
import { authGuard } from './guard/auth-guard';
import { AdvSignal } from './components/adv-signal/adv-signal';
import { ViewchildEx } from './components/viewchild-ex/viewchild-ex';
import { NgTemNgContainer } from './components/ng-tem-ng-container/ng-tem-ng-container';

export const myRoutes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full',
  },
  {
    path: 'adminpage',
    component: Admin,
    title: 'Admin Page',
  },
   {
    path: 'signal-adv',
    component: AdvSignal,
    title: 'Admin Page',
  },
  {
    path: 'data-binding',
    component: DataBinding,
    title: 'Data Binding' 
  },
  {
    path: 'userlist',
    component: User,
    title: 'User Portal',
  },
  {
    path: 'directives',
    component: Directives 
  },
  {
    path: 'viewchild',
    component: ViewchildEx 
  },
  {
    path: 'container-tem',
    component: NgTemNgContainer 
  },
  {
    path: 'clients',
    component: Clinets, 
    data: {
        icon:'fa fa-user',
        role: ['Guest','Admin']
    }
  },
  {
    path: 'foreign-key',
    component: ForeignKey,
  },
  {
    path: 'att-directives',
    component: AttrDirective,
  },
  {
    path: 'signal',
    component: SignalEx 
  },
  {
    path: 'get-api',
    component: GetApiEx,
  },
  {
    path: 'batches',
    component: BatchMaster,
  },
  {
    path: 'vendor',
    component: Vendor 
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
