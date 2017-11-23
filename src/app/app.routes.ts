import { Routes, RouterModule } from '@angular/router';

import { AboutComponent,HomeComponent,ProductComponent,SearchComponent } from './components/index.pages';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent }, 
    { path: 'product/:termino', component: ProductComponent }, 
    { path: '**', pathMatch:'full',redirectTo:'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});