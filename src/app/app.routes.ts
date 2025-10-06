import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LonginPageComponent} from './pages/auth-pages/longin-page/longin-page.component';
import {RegisterComponent} from './pages/auth-pages/register-page/register-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LonginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''} // Wildcard route for a 404 page (optional)
];
