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
import { RxjsBasic } from './components/rxjs-basic/rxjs-basic'; 
import { FormArrayEx } from './components/form-array-ex/form-array-ex';
import { NewFeatures } from './components/new-features/new-features';
import { determineDefaultRoute } from './helper/reroute';
import { InterviewRxjs } from './components/interview-rxjs/interview-rxjs';
import { IntervewiRxjs2 } from './components/intervewi-rxjs2/intervewi-rxjs2';
import { EmployeeForm } from './components/employee-form/employee-form';
import { SignalBasicEx } from './components/signal-basic-ex/signal-basic-ex';
import { RxjsBasicEx } from './components/rxjs-basic-ex/rxjs-basic-ex';
import { RxjsBasocTransform } from './components/rxjs-basoc-transform/rxjs-basoc-transform';
import { Rxj3 } from './components/rxj-3/rxj-3';

export const myRoutes: Routes = [
  {
    path: '',
    redirectTo: determineDefaultRoute ,
    pathMatch: 'full',
  },
  {
    path: 'adminpage',
    component: Admin,
    title: 'Admin Page',
  },
   {
    path: 'employee',
    component: EmployeeForm,
    title: 'Admin Page',
  },
  {
    path: 'employee',
    component: EmployeeForm,
    title: 'Admin Page',
  },
    {
    path: 'rxjs-ex',
    component: RxjsBasicEx,
    title: 'Admin Page',
  },
  {
    path: 'rxjs-ex-2',
    component: RxjsBasocTransform,
    title: 'Admin Page',
  },
   {
    path: 'rxjs-ex-3',
    component: Rxj3,
    title: 'Admin Page',
  },
   {
    path: 'signal-basics',
    component: SignalBasicEx,
    title: 'Admin Page',
  },
   {
    path: 'signal-adv',
    component: AdvSignal,
    title: 'Admin Page',
  },
   {
    path: 'rxjs',
    component: RxjsBasic,
    title: 'Admin Page',
  },
  {
    path: 'data-binding',
    component: DataBinding,
    title: 'Data Binding' 
  },
   {
    path: 'form-array',
    component: FormArrayEx,
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
    path: 'rxjs-interview',
    component: InterviewRxjs 
  },
  {
    path: 'new-features',
    component: NewFeatures 
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
    path: 'rxjs-grouping',
    component: IntervewiRxjs2,
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
