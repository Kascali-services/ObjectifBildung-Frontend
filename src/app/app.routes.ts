import {provideRouter, Routes, withEnabledBlockingInitialNavigation, withRouterConfig} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LonginPageComponent} from './pages/auth-pages/longin-page/longin-page.component';
import {RegisterComponent} from './pages/auth-pages/register-page/register-page.component';
import {MePageComponent} from './pages/private-pages/me-page/me-page.component';
import {AuthGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LonginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'me', component: MePageComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''} // Wildcard route for a 404 page (optional)
];

