
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
//import { AboutComponent } from './components/about/about.component'; 
import { AutosComponent } from './components/autos/autos.component';
import { AutoComponent } from './components/auto/auto.component';

const APP_ROUTES: Routes = [ 
    { path: 'autos', component: AutosComponent },
    { path: 'auto/:id', component: AutoComponent },
   
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true});

//  { path: 'home', component: HomeComponent },
//  { path: 'about', component: AboutComponent },