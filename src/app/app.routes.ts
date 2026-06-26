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

export const myRoutes: Routes = [

  
    {
        path:'',
        redirectTo:'data-binding',
        pathMatch:'full'
    },
    {
        path:'adminpage',
        component: Admin,
        title:'Admin Page'
    },
    {
        path:'data-binding',
        component: DataBinding,
        title:'Data Binding'
    },
    {
        path:'userlist',
        component: User,
        title: 'User Portal'
    },
    {
        path:'directives',
        component: Directives
    },
     {
        path:'clients',
        component: Clinets
    },
     {
        path:'foreign-key',
        component: ForeignKey
    },
    {
        path:'att-directives',
        component: AttrDirective
    },
    {
        path:'signal',
        component: SignalEx
    },
    {
        path:'get-api',
        component: GetApiEx
    },
    {
        path:'batches',
        component: BatchMaster
    },
    {
        path:'vendor',
        component: Vendor
    },
    {
        path:'**',
        component: PageNotFound
    }
    
     

];
