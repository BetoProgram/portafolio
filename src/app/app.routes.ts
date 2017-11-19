import { Routes, RouterModule } from '@angular/router';

import { AboutComponent,HomeComponent,ProductComponent } from './components/index.pages';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }, 
    { path: 'product', component: ProductComponent }, 
    { path: '**', pathMatch:'full',redirectTo:'' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});